'use client'
import Head from 'next/head'
import { useRouter } from 'next/navigation'

const defaultMeta = {
  title: 'Tasqq',
  site_name: 'Tasqq',
  description: 'This is a mock task manager app for basic task management',
  url: '',
  image: `${process.env.NEXT_PUBLIC_SITE_URL}/favicon.png`,
  type: 'website',
  robots:
    process.env.NEXT_PUBLIC_SITE_ENV === 'development'
      ? 'noindex, nofollow'
      : 'follow, index',
  keywords: 'task task-management',
}

type SeoProps = {
  pageTitle?: string
  description?: string
  keywords?: string
  image?: string
  author?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.pageTitle ? `${props.pageTitle} | Tasqq` : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='googlebot' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords}></meta>
      <meta name='author' content={meta.author} />
      {/* <meta property='og:url' content={`${meta.url}${router.asPath}`} /> */}
      {/* <link rel='canonical' href={`${meta.url}${router.asPath}`} /> */}

      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.site_name} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={`${meta.image}`} />
      <meta property='og:image:alt' content='Tasqq' />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <meta property='twitter:image:alt' content='Tasqq' />

      <link rel='shortcut icon' href='/qoin.png' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content={meta.image} />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}
