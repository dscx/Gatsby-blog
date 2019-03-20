import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data
  return (
    <div>
      <h1 style={{ fontFamily: "avenir" }}>{title}</h1>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
