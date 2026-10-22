import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pitn.ai/',
    },
    {
      url: 'https://pitn.ai/global-tlds',
    },
    {
      url: 'https://pitn.ai/robotraits',
    },
  ]
}
