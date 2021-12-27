import React from "react";

import type { LocationContext } from "@gatsbyjs/reach-router";
import { MDXProvider, MDXProviderComponentsProp } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const MdxShortcodes: MDXProviderComponentsProp = {
  img: (props) => <img draggable="false" {...props} loading="lazy" />,
};

export interface IMdxPageContext {
  frontmatter: {
    /**
     * Blog article title, defined in frontmatter.
     */
    title: string;
  };
  /**
   * An estimated time needed to read this article in minutes.
   */
  timeToRead: number;
  /**
   * An excerpt from the markdown file, used for SEO.
   */
  excerpt: string;
  /**
   * Post body content.
   */
  body: string;
}

export type IMdxPageContextWithoutBody = Omit<IMdxPageContext, "body">;

interface IDocsPageTemplateProps {
  pageContext: IMdxPageContext & { page: number };
  location: LocationContext;
}

export default function DocsPageTemplate({
  pageContext,
}: IDocsPageTemplateProps) {
  const { body, ...contextNoBody } = pageContext;

  return (
    <article id="blog-article">
      <MDXProvider components={MdxShortcodes}>
        <MDXRenderer pageContext={contextNoBody}>{body}</MDXRenderer>
      </MDXProvider>
    </article>
  );
}
