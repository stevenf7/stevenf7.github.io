/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageContext } from "../contexts/LanguageContext"
import { getText } from "../data"

function SEO({ description = ``, lang, meta = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `
  )

  // Read language from context when available; fall back to `lang` prop or `en`.
  // Using useContext directly (instead of useLanguage) avoids throwing when SEO
  // is rendered outside of a LanguageProvider (e.g. during SSR of 404 pages).
  const languageContext = useContext(LanguageContext)
  const activeLanguage = languageContext?.language || lang || `en`

  // Support either a plain string or a { en, zh } translations object for
  // title / description so pages can pass multi-language values.
  const resolvedTitle = getText(title, activeLanguage)
  const resolvedDescription =
    getText(description, activeLanguage) || site.siteMetadata.description

  // Intentionally no `titleTemplate` — pages provide the full translated
  // title so we don't append a hard-coded English suffix from siteMetadata.

  return (
    <Helmet
      htmlAttributes={{
        lang: activeLanguage,
      }}
      title={resolvedTitle}
      meta={[
        {
          name: `description`,
          content: resolvedDescription,
        },
        {
          property: `og:title`,
          content: resolvedTitle,
        },
        {
          property: `og:description`,
          content: resolvedDescription,
        },
        {
          property: `og:locale`,
          content: activeLanguage === `zh` ? `zh_CN` : `en_US`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: resolvedTitle,
        },
        {
          name: `twitter:description`,
          content: resolvedDescription,
        },
        // Safari-specific optimizations
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
        {
          name: `mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: `default`,
        },
        // Removed preload for Google Fonts to avoid potential conflicts
      ].concat(meta)}
    >
      {/* Safari font optimization removed - causing conflicts */}
    </Helmet>
  )
}

// Default props removed - using JavaScript default parameters instead

SEO.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default SEO
