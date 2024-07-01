import Branchs from '@/components/branchs'
import Deploys from '@/components/deploys'

const getSite = async () => {
  const response = await fetch(`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}`, {
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_TOKEN}`,
    },
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}

export const getDeploys = async () => {
  const response = await fetch(`https://api.netlify.com/api/v1/sites/${process.env.NETLIFY_SITE_ID}/deploys`, {
    headers: {
      Authorization: `Bearer ${process.env.NETLIFY_TOKEN}`,
    },
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}

export default async function Home() {
  const [site, deploys] = await Promise.all([getSite(), getDeploys()])
  return (
    <main className='max-w-screen flex min-h-screen flex-col gap-8 p-8'>
      <Branchs data={site} />
      <Deploys data={deploys} />
    </main>
  )
}
