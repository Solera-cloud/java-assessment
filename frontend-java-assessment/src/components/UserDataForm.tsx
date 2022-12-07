import React, { useState } from 'react'
import { BiCameraMovie } from 'react-icons/bi'
import styled from 'styled-components'
import axios from 'axios'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;

    input, button {
        padding: 10px;
        margin: 10px;
        border: 1px solid #c7c7c7;
    }
    button {
        background-color: #5a00a3;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }
    svg {
        color: #5a00a3;
        font-weight: 600;
    }
    h2 {
        margin-bottom: 0;
    }
    small {
        font-size: .6rem;
        margin-bottom: 1rem;
    }
    border-radius: 2px;
    padding: 2rem 5rem;
    background-color: white;
    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.21);
`

type Movie = {
    movieId: Number,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
}

const UserDataForm = (): JSX.Element => {
    // There is a problem when trying to set the state of the movie object
    const [movie, setMovie] = useState<Movie | any>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/movies/", movie)
        console.log(res)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>The user/movie form <BiCameraMovie /></h2>
            <small>because I thought it was a movie API 🙄</small>
            <input type="text" onChange={handleChange}  name="firstName" placeholder='First Name' />
            <input type="text" onChange={handleChange} name="lastName" placeholder='Last Name' />
            <input type="tel" onChange={handleChange} name="phone" placeholder='Phone Number' />
            <input type="email" onChange={handleChange} name="email" placeholder='E-mail' />
            <button>Submit</button>
        </Form>
    )
}

export default UserDataForm