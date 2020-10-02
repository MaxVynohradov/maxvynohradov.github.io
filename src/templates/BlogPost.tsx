import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { PostListItem } from '../components/blog/PostListItem';

interface FrontmatterData {
  title: string;
  description: string;
  date: Date;
  coverImgSrc: string;
  tags: string[];
}

interface PageContext {
  body: string;
  stats: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  frontmatterData: FrontmatterData;
}

const BlogPost: FC<PageProps<unknown, PageContext>> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: PageProps<unknown, PageContext>,
) => {
  const {
    pageContext: {
      body: data,
      stats,
      frontmatterData: { tags, date, title, coverImgSrc },
    },
  } = props;
  return (
    <div>
      <PostListItem
        title={title}
        slug="/blog"
        coverImgSrc={coverImgSrc}
        date={date}
        tags={tags}
        stats={stats}
        description={data.substr(1, 19000)}
      />
    </div>
  );
};

// <>
//   <h1>{title}</h1>
//   <h3>{date}</h3>
//   <h3>{tags}</h3>
//   <h4>{text}</h4>
//   <h4>{words} words</h4>
//   <img src={coverImgSrc} alt="cover" style={{ objectFit: 'cover', display: 'block', width: '100%' }} />
//   <MDXRenderer title="My Stuff!">{data}</MDXRenderer>
// </>
export default BlogPost;

// import { MDXProvider } from '@mdx-js/react';
// import { PageProps } from 'gatsby';
// import React, { FC } from 'react';
// import { MDXRenderer } from "gatsby-plugin-mdx";

// const BlogPost: FC<PageProps> = (props: PageProps) => {
//   console.log(props);
//   const { path } = props;
//   const node = props.data;
//
//   return (
//           <MDXProvider>
//             <MDXRenderer>{node.code.body}</MDXRenderer>
//           </MDXProvider>
//
//   <MDXRenderer>
//     <h1>Test Blog Post:</h1>
//     <p>{path}</p>
//   </MDXRenderer>
// );
// };
//
// export default BlogPost;
