import React from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'

function Header(props) {
  const { index, title, description } = props 
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl '>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {
  return (
    <SectionWrapper header={"Genera tu ejercicio"} title={['Es', 'Hora', 'De', 'Fortalecerte']}>
      <Header index={'01'} title={'Escoje tu veneno'} description={"Selecciona el ejercicio a realizar"} />

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      {Object.keys(WORKOUTS).map((type, typeIndex) => {
        return (
          <button className='bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 rounded-lg' key={typeIndex}>
            <p className='capitalize'>{type.replaceAll('_', "")}</p>
          </button>
        )
      })}
      </div>

      <Header index={'02'} title={'Mira en el blanco'} description={"Selecciona el ejercicio a realizar"} />

      <div className='bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg'>
        <div className='relative flex items-center justify-center'>
          <p>Selecciona grupo de musclos</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </div>
      </div>
    </SectionWrapper>
  )
}
