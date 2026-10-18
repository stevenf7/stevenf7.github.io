import { expect, test } from "@playwright/test"

const SECTION_IDS = [
  "home",
  "nvidia",
  "education",
  "publications",
  "projects",
  "skills",
  "contact",
]

// Static sections ship both languages and hide one with CSS, so text
// assertions must use innerText (visible text) rather than textContent.
const VISIBLE = { useInnerText: true }

const trackErrors = (page) => {
  const errors = []
  page.on("pageerror", (error) => errors.push(error.message))
  page.on("console", (message) => {
    if (message.type() !== "error") return
    if (message.location().url.includes("googletagmanager.com")) return
    errors.push(message.text())
  })
  return errors
}

// client:visible islands only hydrate once scrolled into view.
const hydrateAllIslands = async (page) => {
  for (const id of SECTION_IDS) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded()
  }
  await expect(page.locator("astro-island[ssr]")).toHaveCount(0)
}

test("home page renders every section and hydrates without errors", async ({ page }) => {
  const errors = trackErrors(page)
  await page.goto("/")

  await expect(page).toHaveTitle(/Steven/)
  for (const id of SECTION_IDS) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
  await hydrateAllIslands(page)

  expect(errors).toEqual([])
})

test("?lang=zh renders Chinese in static sections and React islands", async ({ page }) => {
  const errors = trackErrors(page)
  await page.goto("/?lang=zh")

  await expect(page.locator("html")).toHaveAttribute("lang", "zh")
  await expect(page).toHaveTitle(/冯纪元/)
  await hydrateAllIslands(page)

  await expect(page.locator("#publications-heading")).toContainText("论文", VISIBLE)
  await expect(page.locator("#publications-heading")).not.toContainText("Publications", VISIBLE)
  await expect(page.locator("#skills-heading")).not.toContainText("Skills", VISIBLE)
  await expect(page.locator("#nvidia-heading")).toContainText("机器人仿真", VISIBLE)
  await expect(page.locator("#education-heading")).toContainText("教育", VISIBLE)

  expect(errors).toEqual([])
})

test("language toggle switches every section and updates the URL", async ({ page }) => {
  await page.goto("/")
  await hydrateAllIslands(page)

  await page.locator(".language-toggle").click()

  await expect(page.locator("html")).toHaveAttribute("lang", "zh")
  await expect(page).toHaveURL(/lang=zh/)
  await expect(page.locator("#publications-heading")).toContainText("论文", VISIBLE)
  await expect(page.locator("#publications-heading")).not.toContainText("Publications", VISIBLE)
  await expect(page.locator("#education-heading")).toContainText("教育", VISIBLE)
  await expect(page.locator(".hero-actions a[data-lang-path='/resume']")).toHaveAttribute(
    "href",
    /lang=zh/
  )

  await page.locator(".language-toggle").click()
  await expect(page.locator("html")).toHaveAttribute("lang", "en")
  await expect(page.locator("#publications-heading")).toContainText("Publications", VISIBLE)
  await expect(page.locator("#publications-heading")).not.toContainText("论文", VISIBLE)
  await expect(page.locator("#education-heading")).not.toContainText("教育", VISIBLE)
})

test("theme toggle switches theme and persists across reloads", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" })
  await page.goto("/")
  const html = page.locator("html")
  await expect(html).toHaveAttribute("data-theme", "light")

  await page.locator(".theme-toggle").click()
  await expect(html).toHaveAttribute("data-theme", "dark")

  await page.reload()
  await expect(html).toHaveAttribute("data-theme", "dark")
})

test("education card opens and closes the detail modal", async ({ page }) => {
  await page.goto("/")
  await page.locator("#education").scrollIntoViewIfNeeded()
  await expect(page.locator("#education").locator("xpath=ancestor::astro-island[@ssr]")).toHaveCount(0)

  await page.locator("#education .card .btn").first().click()
  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await expect(dialog.locator("#modal-role")).not.toBeEmpty()

  await page.keyboard.press("Escape")
  await expect(dialog).toBeHidden()
})

test("resume page embeds the PDF", async ({ page, request }) => {
  await page.goto("/resume/")
  const iframe = page.locator("iframe.Resume")
  await expect(iframe).toBeAttached()

  const pdfUrl = await iframe.getAttribute("src")
  expect(pdfUrl).toMatch(/\.pdf$/)
  const response = await request.get(pdfUrl)
  expect(response.ok()).toBe(true)
  expect(response.headers()["content-type"]).toContain("pdf")
})

test("mobile navbar only shows Resume, Home, and the toggles", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only layout")
  await page.goto("/")

  const visibleLinks = page.locator(".navbar-wrapper .nav-link:visible")
  await expect(visibleLinks).toHaveCount(2)
  await expect(page.locator(".language-toggle")).toBeVisible()
  await expect(page.locator(".theme-toggle")).toBeVisible()
})
