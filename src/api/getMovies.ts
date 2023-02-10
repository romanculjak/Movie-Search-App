import axios from 'axios'


const findTitlesOptions = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/v2/find',
    params: {title: '', limit: '20', sortArg: 'moviemeter,asc'},
    headers: {
        'X-RapidAPI-Key': '39cfe17e9emshfd62824a4a32285p1969bcjsn9390b52faacc',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };


export const findTitles =async (title:string) => {
    const response = await axios.request({...findTitlesOptions, params: {...findTitlesOptions.params, title: title}})

    return response.data.results

}


const getPlotOptions = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-plots',
    params: {tconst: ''},
    headers: {
        'X-RapidAPI-Key': '39cfe17e9emshfd62824a4a32285p1969bcjsn9390b52faacc',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};


export const getPlot =async (id:string) => {
    const response = await axios.request({...getPlotOptions, params: {...findTitlesOptions.params, tconst: id}})

    console.log("data is ", response.data )
    return response.data

}