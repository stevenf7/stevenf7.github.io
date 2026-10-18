import { describe, expect, it } from "vitest"
import data from "../../src/data"
import { NVIDIA_MEDIA, PROJECT_MEDIA, PUBLICATION_MEDIA } from "../../src/media"

const isFilled = (value) =>
  Array.isArray(value)
    ? value.length > 0 && value.every(isFilled)
    : typeof value === "string" && value.trim().length > 0

const collectTranslationProblems = (value, path = "data", problems = []) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      collectTranslationProblems(item, `${path}[${index}]`, problems)
    )
  } else if (value && typeof value === "object") {
    if ("en" in value || "zh" in value) {
      if (!isFilled(value.en)) problems.push(`${path}.en`)
      if (!isFilled(value.zh)) problems.push(`${path}.zh`)
    } else {
      Object.entries(value).forEach(([key, item]) =>
        collectTranslationProblems(item, `${path}.${key}`, problems)
      )
    }
  }
  return problems
}

const collectLinks = (value, path = "data", links = []) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectLinks(item, `${path}[${index}]`, links))
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => {
      if ((key === "url" || key === "projectLink") && item !== null) {
        links.push({ path: `${path}.${key}`, url: item })
      } else {
        collectLinks(item, `${path}.${key}`, links)
      }
    })
  }
  return links
}

const missingMediaKeys = (items, mediaMap) =>
  items.map((item) => item.media).filter((key) => !mediaMap[key])

describe("translations", () => {
  it("every bilingual field has both English and Chinese text", () => {
    expect(collectTranslationProblems(data)).toEqual([])
  })
})

describe("media references", () => {
  it("NVIDIA showcase media keys exist", () => {
    const items = [
      data.nvidiaFeaturedDemo,
      ...data.nvidiaCaseStudies,
      ...data.nvidiaCarouselItems,
    ]
    expect(missingMediaKeys(items, NVIDIA_MEDIA)).toEqual([])
  })

  it("publication media keys exist", () => {
    expect(missingMediaKeys(data.publications, PUBLICATION_MEDIA)).toEqual([])
  })

  it("project media keys exist", () => {
    expect(missingMediaKeys(data.projectsCarouselItems, PROJECT_MEDIA)).toEqual([])
  })

  it("media type matches the file kind", () => {
    const items = [
      [data.nvidiaFeaturedDemo, NVIDIA_MEDIA],
      ...data.nvidiaCaseStudies.map((item) => [item, NVIDIA_MEDIA]),
      ...data.nvidiaCarouselItems.map((item) => [item, NVIDIA_MEDIA]),
      ...data.projectsCarouselItems.map((item) => [item, PROJECT_MEDIA]),
    ]
    const mismatched = items
      .filter(([item, map]) => {
        const isVideo = /\.(mp4|webm|mov)(\?|$)/i.test(map[item.media] || "")
        return (item.type === "video") !== isVideo
      })
      .map(([item]) => item.media)
    expect(mismatched).toEqual([])
  })

  it("every image field resolved to a URL", () => {
    const records = [
      ...data.education,
      ...data.projects,
      ...data.skills,
      ...data.social,
    ]
    const empty = records.filter((record) => {
      const asset = record.imageSrc ?? record.img
      return typeof asset !== "string" || asset.length === 0
    })
    expect(empty).toEqual([])
  })
})

describe("links", () => {
  it("external links are absolute http(s) URLs", () => {
    const invalid = collectLinks(data).filter(
      ({ url }) => typeof url !== "string" || !/^https?:\/\/\S+$/.test(url)
    )
    expect(invalid).toEqual([])
  })

  it("contact email looks valid", () => {
    expect(data.contactEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })
})

describe("required fields", () => {
  it("publications have unique ids and required fields", () => {
    const ids = data.publications.map((publication) => publication.id)
    expect(new Set(ids).size).toBe(ids.length)
    data.publications.forEach((publication) => {
      expect(publication.title, `publication ${publication.id}`).toBeTruthy()
      expect(publication.subtitle, `publication ${publication.id}`).toBeTruthy()
      expect(publication.type, `publication ${publication.id}`).toBeTruthy()
    })
  })

  it("education and internship entries can populate the modal", () => {
    ;[...data.education, ...data.projects].forEach((entry, index) => {
      const label = entry.title?.en || `entry ${index}`
      expect(entry.title, label).toBeTruthy()
      expect(entry.para, label).toBeTruthy()
      expect(entry.workImg || entry.imageSrc, label).toBeTruthy()
      expect(Array.isArray(entry.description), label).toBe(true)
      expect(entry.description.length, label).toBeGreaterThan(0)
    })
  })

  it("project cards have a title and description", () => {
    data.projectsCarouselItems.forEach((item) => {
      expect(item.title, item.media).toBeTruthy()
      expect(item.description, item.media).toBeTruthy()
      expect(Array.isArray(item.buttons), item.media).toBe(true)
    })
  })
})
