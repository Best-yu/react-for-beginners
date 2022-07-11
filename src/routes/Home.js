import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
    const[loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // useEffect(()=>{
    //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.moives);
    //   }) ;
    // }, [])

    // const getMovies = async() =>{
    //   const response = await fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    //     );
    //     const json = await response.json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // }

    const getMovies = async () => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )).json();

        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    console.log(movies);

    return (
        <div className="App">
            {loading ? (<h1>"Loading..." </h1>) :
                (<div>{
                    movies.map((m) => (
                        <Movie key={m.id}
                            id = {m.id}
                            coverImg={m.medium_cover_image}
                            title={m.title}
                            summary={m.summary}
                            genres={m.genres}
                        />
                    ))}
                </div>)
            }
        </div>
    );
}

export default Home;