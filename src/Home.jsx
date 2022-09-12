import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './css/index.css';

function Home() {

    const [films, setFilms] = useState();
    const randFilm = async () => {

        let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

        const response = await fetch(
            `http://localhost:8080/Home/aFilm/${id}`
        ).then((response) => response.json());
            setFilms(response);
            
    };
    useEffect(() => {
        randFilm();
    }, []);

    return (
        <div>
                <h1>Hello and Welcome to</h1>
                <h2>Filmy McFilm Face</h2>
            <div>
                {films &&
                     <div>
                        <p>{films.title}</p>
                        <p>{films.description}</p>
                    </div>  
                }
            </div>
        </div>
        
    );
}

export default Home;