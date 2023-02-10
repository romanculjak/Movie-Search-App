import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPlot } from '../api/getMovies';



type Props = {}

export default function PlotPage(props: Props) {
    
    const { id } = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    const queryClient = useQueryClient()

    const {isLoading, isFetching, isError, error, data} = useQuery(['plot',id], ()=>getPlot(id!),{staleTime:Infinity, cacheTime:Infinity})


    useEffect(()=>{

    },[])

  return (
    <div className='container py-20'>
        <div className='py-4 px-2 bg-gray-200'>
            <button className='absolute top-2 left-2 p-4 rounded-md bg-emerald-500 hover:bg-emerald-800 text-white' onClick={()=>navigate('/',{state:{previousSearch:location.state.previousSearch}})}>Back</button>
            <div className=''>
                {!isLoading && !isFetching && !isError && <h1 className='font-medium text-lg mb-8'>{`The plot of ${data.base.title}`}</h1>}
                {!isLoading && !isFetching && !isError &&  <p>{data.plots[0].text}</p>}
                {/* {isLoading || isFetching && <p>Loading...</p>}
                {isError && <p>There were some error...</p>} */}

            </div>
        </div>
    </div>
  )
}