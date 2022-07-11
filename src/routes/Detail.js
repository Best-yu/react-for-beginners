import { useParams } from "react-router-dom";
import { useEffect } from 'react';

//useParams : url에 보내는 변수값을 가져올 수있다

function Detail (){
    const {id} = useParams();
    const getMovie = async() =>{
        const json = await ( await fetch(
            `https://yts.mx/api/v2/list_movies.json?movie_id=${id}`
        )).json();

        console.log(json);
    }
    useEffect(() => {
        getMovie();
    },[])
    console.log(id);
    return (<h1>Detail</h1>)
}

export default Detail;