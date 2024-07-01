import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default async function branchs({ data }: any) {
  return (
    <div suppressHydrationWarning>
      <h2 className='mb-8 text-4xl font-bold'>Environments</h2>
      <div className='flex items-stretch justify-evenly gap-8'>
        <div>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle>Production</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={'https://main--qiplim.netlify.app/'}
                target='_blank'
              >
                <img
                  src={data.screenshot_url}
                  alt='screenshot'
                  width={400}
                />
              </Link>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle>Stage</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={'https://stage--qiplim.netlify.app/'}
                target='_blank'
              >
                <img
                  src={data.screenshot_url}
                  alt='screenshot'
                  width={400}
                />
              </Link>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle>Develop</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={'https://develop--qiplim.netlify.app/'}
                target='_blank'
              >
                <img
                  src={data.screenshot_url}
                  alt='screenshot'
                  width={400}
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
