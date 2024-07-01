'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function Deploys({ data }: any) {
  const getColor = (state: string) => {
    switch (state) {
      case 'ready':
        return 'text-green-500'
      case 'building':
        return 'text-yellow-500'
      case 'error':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  const router = useRouter()
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh()
    }, 10000)
    return () => clearInterval(interval)
  }, [router])

  return (
    <div>
      <h2 className='mb-8 text-4xl font-bold'>Deploys</h2>
      <div className='flex flex-col gap-4'>
        {data
          .filter((deploy: any) => {
            return deploy.branch === 'main' || deploy.branch === 'stage' || deploy.branch === 'develop'
          })
          .map((deploy: any) => (
            <div key={deploy.id}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className={`flex gap-2 ${getColor(deploy.state)}`}>
                    {deploy.branch} {deploy.state} {deploy.locked ? '🔒' : ''}
                  </CardTitle>
                  <CardDescription>{deploy.title}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
      </div>
    </div>
  )
}
