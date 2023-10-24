import Image from 'next/image'

const Summary = ({
    image,
    bgColor,
    textColor,
    score,
    title
}) => {
  return (
    <div className={`flex gap-2 justify-between w-full ${bgColor} bg-opacity-10 ${textColor} p-5 rounded`}>
        <div className='flex gap-4'>
            <Image src={image} alt='icon' width={25} height={25}/>
            <p className={`text-${textColor}`}>{title}</p>
        </div>
        <p className='text-black'>{score} / <span className='opacity-50'>100</span></p>
    </div>
  )
}

export default Summary