import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { findTitles } from '../api/getMovies'
import TitleItem from './TitleItem'
import { useParams, useNavigate, useLocation } from 'react-router-dom';



type Props = {}

type Movie = {title: string, id:string}

function TitlesList({}: Props) {

    const [searchTermHolder, setSearchTermHolder] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("")


    const {title} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const queryClient = useQueryClient()

    const {isLoading, isFetching, isError, error, data} = useQuery<Movie[]>(['titles',searchTerm], ()=>findTitles(searchTerm),{staleTime:Infinity, cacheTime:Infinity, refetchOnMount: false, refetchOnWindowFocus:false})


    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        setSearchTerm(searchTermHolder)
        // refetch()
    }

    const titleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setSearchTermHolder(e.target.value)
    }

    //This is not the best way of keeping the track of the last search term, I could store it as a url param or into global store but I wanted to display passing of state between routes
    useEffect(()=>{
        if(location?.state?.previousSearch){
            setSearchTerm(location.state.previousSearch)
            setSearchTermHolder(location.state.previousSearch)

        }
    },[])

    const searchDisabled = isLoading || isFetching


    // if(isLoading || isFetching) return <div>loading...</div>

    // if(isError) return <div>error...</div>


  return (
    <div>
        <div >
            <form className='flex flex-col text-start' onSubmit={(e)=>handleSubmit(e)}>
                <label className='font-medium' htmlFor='movie-title'>Enter movie or tv show title</label>       
                <div className='flex mt-2'>
                    <input className='px-2 py-4 rounded-sm bg-slate-100 block focus:outline-emerald-600 flex-1' type={'text'} value={searchTermHolder} id='movie-title' placeholder='Enter title' onChange={(e)=>titleChange(e)}/>
                    <button disabled={searchDisabled} className='px-2 py-1 rounded-sm bg-emerald-600 hover:bg-emerald-900 disabled:bg-gray-700 text-white'>Search</button>
                </div>
            </form>
        </div>
        <div className='mt-4 rounded-lg bg-slate-50 p-4'>
            

            {isLoading || isFetching ? <p>{"Loading :)"}</p> :


            (data && data.length >0 ? 
                data.map(m => <TitleItem title={m.title} id={m.id} searchTerm={searchTerm}/>):<p>{"Nothing to display :("}</p>)
            
            }
        </div>
    </div>
  )
}

export default TitlesList