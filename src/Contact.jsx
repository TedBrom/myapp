import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Contact() 
{
/*
    function getAllFilms() 
    {

        fetch('http://localhost:8080/Home/allFilms', { method: 'GET' })
           .then(data => data.json()) // Parsing the data into a JavaScript object
           .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
           
    }
    function getAFilm()
    {
        fetch('http://localhost:8080/Home/aFilm/1', { method: 'GET' })
        .then(data => data.json()) // Parsing the data into a JavaScript object
        .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
           
    }
    function getFilmTitle()
    {
        fetch('http://localhost:8080/Home/aFilm/1', { method: 'GET' })
        .then(response => response.json())
        .then(data => alert(data.title) ) // Displays the firstName from the API response
    }
     function showFilmsNicely()
    {
         let filmDiv = document.getElementById('filmTable')
     
         fetch('http://localhost:8080/Home/allFilms', { method: 'GET' })
         .then(res => res.json())
         .then(films => 
             {
                 films.forEach((film, index )=>
                     {if(index <=49 ){
                         filmDiv.innerHTML += `
                                                 <tr>    
                                                     <td>${film.filmID}</td>
                                                     <td>${film.title}</td>
                                                     <td>${film.description}</td>
                                                 </tr>
                                                 `
                                                
                     }
                     } ); 
             })
    }
 */    

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
            
            {films &&
                films.map((film) => 
                ( <div> 
                    <div className="item-container">                 
                        <tr>    
                        <td>{film.filmID}</td>
                        <td>{film.title}</td>
                        <td>{film.description}</td>
                        </tr>
                    </div>  
                  </div>   
                ))
            }
            
        </div>
       
    );
    
}

export default Contact;

