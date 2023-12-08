import Link from 'next/link'

export default function Home() {
  return (
  <div className='w-screen h-screen bg-slate-900 flex justify-center items-center'>
    <div className='w-full max-w-[712px] mx-auto'>
      <h1 className='text-2xl font-bold text-slate-500 tracking-wide'>
        Beacons -vs- Demons
      </h1>
      <p className='text-lg text-amber-100'>
        This is the best app for tracking your mood through out your life. All
        you have to do is be honest.
      </p>
      <Link href='/sign-up'>
        <button
          className="mt-lg mr-lg bg-amber-500 text-slate-800 font-semibold px-sm py-xs
            rounded-lg text-base tracking-wide hover:bg-amber-600"
        >
          GET STARTED
        </button>
      </Link>
    </div>
  </div>
  )
}
