import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type Meta = Array<{ property?: string; name?: string; content: unknown }>;

export interface SeoProps {
  description?: string;
  lang?: string;
  title?: string;
  pathname?: string;
  meta?: Meta;
  image: {
    src: string;
    height: number;
    width: number;
  };
}

const SEO: FC<SeoProps> = ({ description, lang, meta = [], image: metaImage, title, pathname }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage && metaImage.src ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  const link = canonical ? [{ rel: 'canonical', href: canonical }] : [];

  const ifMetaExists = [
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: metaImage.width },
    { property: 'og:image:height', content: metaImage.height },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
  const additionalMeta = metaImage ? ifMetaExists : [{ name: 'twitter:card', content: 'summary' }];
  const finalMeta = [
    { name: 'description', content: metaDescription },
    { name: 'keywords', content: site.siteMetadata.keywords.join(',') },
    { property: 'og:title', content: title },
    { property: 'og:description', content: metaDescription },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:creator', content: site.siteMetadata.author },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: `${metaDescription.substring(0, 234)}...` },
  ]
    .concat(additionalMeta)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .concat(meta);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={link}
      meta={finalMeta}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

export default SEO;
