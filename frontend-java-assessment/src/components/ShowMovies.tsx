import React, { Key, useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Movie from './Movie'

const ShowMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ShowMovies = () => {
    const [movies, setMovies] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8080/movies/")
            console.log(res.data)
            setMovies(res.data)
        }
        
        fetchData();
    }, [])

    return (
        <ShowMoviesContainer>
            {movies?.map((m: any, index: Number) => <Movie key={(index as Key)} firstName={m.firstName} lastName={m.lastName} email={m.email} phoneNumber={m.phoneNumber} />)}
        </ShowMoviesContainer>
    )
}

export default ShowMovies