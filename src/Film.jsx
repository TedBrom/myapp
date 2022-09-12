import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Film() 
{

    const [films, setFilms] = useState();

    const getFilmsNicer = async () => {
        const response = await fetch(
            `http://localhost:8080/Home/allFilms`
        ).then((response ) => response.json());
        setFilms(response);
    };

    useEffect(() => {
        getFilmsNicer();
    }, []);
    
    return (
        <div>
            <h1>Here's all the films at Film McFilmface</h1>
            <table>     
            {films &&
                films.map((film) => 
                (          
                <tr>    
                    <td>{film.filmID}</td>
                    <td>{film.title}</td>
                    <td>{film.description}</td>
                </tr>
                ))
            }
            </table>
        </div>
       
    );
    
}

export default Film;

