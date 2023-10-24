import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import Visual from '../public/icon-visual.svg';
import Verbal from '../public/icon-verbal.svg';
import Reaction from '../public/icon-reaction.svg';
import Memory from '../public/icon-memory.svg';
import Button from './components/Button.jsx';

export default function Home() {
  
  return (
    <main className="flex min-h-screen min-w-screeen flex-col bg-white">
      <Header/>
      <section className='p-8 flex flex-col gap-5 items-start'>
        <h1 className=' text-[25px] text-start font-semibold text-black'>Summary</h1>
      <Summary image={Reaction} title="Reaction" bgColor="bg-primary-light-red" textColor="text-primary-light-red" score="80"/>
      <Summary image={Memory} title="Memory" bgColor="bg-primary-orange-yellow" textColor="text-primary-orange-yellow" score="92"/>
      <Summary image={Verbal} title="Verbal" bgColor="bg-primary-green-teal" textColor="text-primary-green-teal" score="61"/>
      <Summary image={Visual} title="Visual" bgColor="bg-primary-cobalt-blue" textColor="text-primary-cobalt-blue" score="72"/>
      <Button>Continue</Button>
      </section>
    </main>
  )
}
