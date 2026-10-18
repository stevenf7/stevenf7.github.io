import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"

const NotFoundContent = () => {
  const { language, getLanguageUrl } = useLanguage()

  return (
    <section className="section" aria-labelledby="not-found-heading">
      <div className="container" style={{ textAlign: "center", gap: "1rem" }}>
        <h1 id="not-found-heading">
          {language === "zh" ? "404：页面未找到" : "404: Page Not Found"}
        </h1>
        <p>
          {language === "zh"
            ? "抱歉，您访问的页面不存在或已被移动。"
            : "Sorry, the page you are looking for doesn't exist or has been moved."}
        </p>
        <a href={getLanguageUrl(language, "/")} className="primary-btn">
          {getText(data.nav.home, language)}
        </a>
      </div>
    </section>
  )
}

const NotFoundPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title={data.seo.notFoundTitle} pathname="/404/" />
    <NotFoundContent />
  </Layout>
)

export default NotFoundPage
