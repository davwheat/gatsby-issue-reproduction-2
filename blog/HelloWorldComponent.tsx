import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function HelloWorldComponent() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "2021/12/31/massive mimo.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <GatsbyImage alt="" image={data.file.childImageSharp.fixed} />;
}
