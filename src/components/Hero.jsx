import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
        <p>ES HORA DE COMENZAR</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Musclo<span className='text-blue-400'>sisimo</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Por la presente reconozco que puedo hacerme <span className='text-blue-400 font-medium'>increíblemente enorme</span> y aceptar todos los riesgos de convertirse en una <span className='text-blue-400 font-medium'>masa monstruosa</span> local, afectado con dismorfia corporal severa, incapaz de pasar por las puertas.</p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Acepta y Empieza"}></Button>
    </div>
  )
}
