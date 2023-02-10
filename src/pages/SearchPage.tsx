import React, { useEffect } from 'react'
import { findTitles } from '../api/getMovies'
import TitlesList from '../components/TitlesList'

type Props = {}

export default function SearchPage({}: Props) {
    // useEffect(()=>{
    //     const fnc =async ()=>{const data = await findTitles('potter')
    //     console.log(data)}

    //     fnc()
    // },[])

  return (

    
    <div className="container">
        <div className='py-4'>
            <h1 className='font-bold text-2xl lg:text-4xl text-center'>This is web-app demonstrates using react-query and axios in order to cache search queries</h1>
        </div>
        <div className=''>
            <TitlesList/>
        </div>
    </div>
  )
}