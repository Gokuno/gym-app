import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
        <p>LET'S GET STARTED</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Fitness<span className='text-blue-400'>helper</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Fitness helper is an app that will help you get the right type of fitness trainning for you. <span className='text-blue-400 font-medium'>You decide </span>what part of your body you want to focus on and <span className='text-blue-400 font-medium'>Fitness Helper </span> will do the rest.</p>
        <p>by JORGE ALLAN PAZ</p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Begin"}></Button>
    </div>
  )
}
