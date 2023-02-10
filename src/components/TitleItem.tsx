import React from 'react'
import {useNavigate} from 'react-router-dom'

type Props = 
{
    id:string,
    title: string,
    searchTerm: string
}

export default function TitleItem({title,id, searchTerm}: Props) {

    const navigate = useNavigate();

    const handleClick = ()=>{
        console.log(id)

        //we need to extract the id because of the format id came from which is like this: /title/123456789/
        let extractedId = id.substring(7,16);

        console.log(extractedId)


        //This is not the best way of keeping the track of the last search term, I could store it as a url param or into global store but I wanted to display passing of state between routes
        navigate(`plot/${extractedId}`,{state:{previousSearch:searchTerm}})

    }


  return (
    <div className='px-4 py-2 rounded-md bg-gray-200 hover:bg-emerald-700 mt-2 cursor-pointer' onClick={handleClick}>
        <div>
            <span className='font-medium text-sm text-center block'>{title}</span>
        </div>
    </div>
  )
}