export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2 className='text-4xl font-bold'>Main</h2>
      <iframe src='https://qiplim.netlify.app/'></iframe>
      <h2 className='text-4xl font-bold'>Stage</h2>
      <iframe src='https://stage--qiplim.netlify.app/'></iframe>
      <h2 className='text-4xl font-bold'>Develop</h2>
      <iframe src='https://develop--qiplim.netlify.app/'></iframe>
    </main>
  )
}
