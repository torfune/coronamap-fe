import Head from 'next/head'
import { FC } from 'react'

interface Props {
  title: string
  description: string
}
const PageHead: FC<Props> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://coronamap.app" />

    <meta
      property="og:image"
      content="https://coronamap.app/images/og-image.png"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    <meta property="og:image:alt" content="Coronavirus World Map" />
  </Head>
)

export default PageHead
