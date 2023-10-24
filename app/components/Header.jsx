import Image from 'next/image'
import Visual from '../../public/icon-visual.svg'

const Header = () => {
  return (
    <main className='bg-gradient-to-b from-gradients-slate-blue to-gradients-royal-blue flex flex-col items-center gap-5 text-center w-full h-[400px] rounded-b-3xl p-10'>
        <h1 className='text-[18px] opacity-80'>Your Result</h1>
        <div className='rounded-full p-4 bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue h-[150px] w-[150px] flex flex-col items-center justify-center'>
            <h1 className="text-[55px] font-bold">76</h1>
            <h3 className="opacity-60">of 100</h3>
        </div>
        <div>
            <h2 className='text-[25px] font-semibold'>Great</h2>
            <p className='text-[18px] opacity-80'>You scored higher than 65% of the people who have taken these tests</p>
        </div>
    </main>
  )
}

export default Header