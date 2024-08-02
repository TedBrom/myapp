import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';


function Film() 
{

    const [films, setFilms] = useState();

    const getFilmsNicer = async () => {
        const response = await fetch(
            `https://sakilaapp-1663062362455.azurewebsites.net/Home/allFilms`
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
                <th>ID</th>
                <th>Title</th>
                <th>Description</th> 
                <th>Year of Release</th>
                <th>Cost Per Week</th>
                <th>Film Duration</th>
                <th>Film Rating</th> 
            {films &&
                films.map((film) => 
                (          
                <tr>    
                    <td>{film.filmID}</td>
                    <td>{film.title}</td>
                    <td>{film.description}</td>
                    <td>{film.year}</td>
                    <td>{film.rentRate}</td>
                    <td>{film.length}</td>
                    <td>{film.rating}</td>
                </tr>
                ))
            }
            </table>
            <div style={{display: 'grid',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
            <Spinner animation="grow" size="sm" role="status" style={{display: 'grid',  justifyContent:'center', alignItems:'center' , height: '10vh' }}>
                <Spinner animation="border" role="status" style={{display: 'grid',  justifyContent:'center', alignItems:'center' , width: '10vh' }}>
                    <span className="visually-hidden">Loading...</span>
                    <div>
                                <Spinner animation="border" role="status" style={{display: 'grid',  justifyContent:'', alignItems:'center' , height: '' }}>
                                <span className="visually-hidden">Loading...</span>
                                <div>
                                    <Spinner animation="border" role="status" style={{display: 'flex',  justifyContent:'center', alignItems:'center' , height: ''}}>
                                    <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner animation="border" role="status" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner animation="border" role="status" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <Spinner animation="border" role="status" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                                </Spinner>  
                    </div>   
                </Spinner>
            </Spinner>
                
            </div>
            
        </div>
       
    );
    
}

export default Film;

