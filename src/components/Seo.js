import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description }) => {
      const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  return (
  <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default Seo