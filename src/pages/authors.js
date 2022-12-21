import * as React from 'react'
import { graphql } from 'gatsby'

import Bio from "../components/bio"
import Layout from "../components/layout"

const AuthorIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`
  
  // generate list of biographies from the authors array
  const authorBios = data.allContributorYaml.nodes.map(author => {
    return (
      <Bio author={author}></Bio>
    )
  })
/*
  const authorNames = data.allContributorYaml.nodes.map(author => {
    return (<div>{author.name}</div>)
  })
*/
  return (
    <Layout location={location} title={siteTitle} description={siteDescription} >
        <p>A list of all contributors:</p>
        <div>
            {authorBios}
        </div>
    </Layout>
  )
}

// page query
export const query = graphql`
query allContributors {
    allContributorYaml {
      nodes {
        name
        bio
        picture {
          childImageSharp {
            gatsbyImageData(width: 75)
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default AuthorIndex