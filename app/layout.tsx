import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://pitn.ai'),

  title: {
    default: 'PITN.ai | Robotics Digital Assets and Domain Portfolios',
    template: '%s | PITN.ai',
  },

  description:
    'Explore PITN.ai’s portfolio of robotics-related digital assets, humanoid and collaborative robotics hubs, robotic components, and multilingual domain resources.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: 'https://pitn.ai/',
    siteName: 'PITN.ai',
    title: 'PITN.ai | Robotics Digital Assets and Domain Portfolios',
    description:
      'Explore PITN.ai’s robotics-related digital assets, robotics hubs, robotic components, and multilingual domain resources.',
  },

  robots: {
    index: true,
    follow: true,
  },
}
