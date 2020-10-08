const path = require(`path`)
const readingTime = require('reading-time');


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostsList = path.resolve(`./src/templates/BlogPostsList.tsx`);
  createPage({
    path: `blog`,
    component: BlogPostsList,
  })
  createPage({
    path: `/`,
    component: BlogPostsList,
  })

  const blogPost = path.resolve(`./src/templates/BlogPost.tsx`)
  const result = await graphql(`
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              frontmatter {
                title
                description
                date
                tags
                coverImg {
                  childImageSharp {
                    fluid(maxWidth: 1024) {
                      base64,
                      src,
                      srcSet
                    }
                  }
                }
              }
              id
              body
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const { node: { body, slug } } = post
    const { title, description, date, coverImg, tags } = post.node.frontmatter;
    createPage({
      path: `blog/${slug}`,
      component: blogPost,
      context: {
        slug,
        body,
        frontmatter: { title, description, date, coverImgSrc: coverImg.childImageSharp.fluid.src, tags },
        stats: readingTime(body, { wordsPerMinute: 360 }),
        previous,
        next,
        id: post.node.id,
      },
    })
  })
}
