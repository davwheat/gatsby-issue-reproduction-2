/**
 * Create blog article pages.
 */
async function createBlogArticles({ actions, graphql, reporter }) {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            path
          }

          id
          body
          excerpt
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("failed to create posts ", result.errors);
  }
  const pages = result.data.allMdx.nodes;

  pages.forEach((page, i) => {
    const { frontmatter, excerpt, id, body } = page;

    actions.createPage({
      path: `/blog/${frontmatter.path}`,
      component: path.resolve(
        `./src/templates/BlogPageTemplate.tsx`
      ),

      context: {
        id,
        excerpt,
        body,
        frontmatter,
      },
    });
  });
}
