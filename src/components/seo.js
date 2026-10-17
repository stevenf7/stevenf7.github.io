import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { LanguageContext } from "../contexts/LanguageContext"
import { getText } from "../data"
import socialPreviewImage from "../images/SelfPhoto4.jpg"

function SEO({ description = ``, lang, meta = [], pathname = `/`, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const languageContext = useContext(LanguageContext)
  const activeLanguage = languageContext?.language || lang || `en`

  const resolvedTitle = getText(title, activeLanguage)
  const resolvedDescription =
    getText(description, activeLanguage) || site.siteMetadata.description

  const siteUrl = (
    site.siteMetadata?.siteUrl || `https://stevenf7.github.io`
  ).replace(/\/$/, ``)
  const normalizedPath = pathname.startsWith(`/`) ? pathname : `/${pathname}`
  const canonicalUrl = `${siteUrl}${normalizedPath}`
  const zhAlternateUrl = `${canonicalUrl}?lang=zh`
  const socialImageUrl = socialPreviewImage.startsWith(`http`)
    ? socialPreviewImage
    : `${siteUrl}${socialPreviewImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang: activeLanguage,
      }}
      title={resolvedTitle}
      link={[
        {
          rel: `canonical`,
          href: activeLanguage === `zh` ? zhAlternateUrl : canonicalUrl,
        },
        {
          rel: `alternate`,
          hrefLang: `en`,
          href: canonicalUrl,
        },
        {
          rel: `alternate`,
          hrefLang: `zh`,
          href: zhAlternateUrl,
        },
        {
          rel: `alternate`,
          hrefLang: `x-default`,
          href: canonicalUrl,
        },
      ]}
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
          property: `og:url`,
          content: activeLanguage === `zh` ? zhAlternateUrl : canonicalUrl,
        },
        {
          property: `og:image`,
          content: socialImageUrl,
        },
        {
          property: `og:image:alt`,
          content: resolvedTitle,
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
          content: `summary_large_image`,
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
        {
          name: `twitter:image`,
          content: socialImageUrl,
        },
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default SEO
