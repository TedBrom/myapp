import React from 'react';



function Contact() 
{

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
    return (
        <div>
            <h1>Here's all the films at Film McFilmface</h1>
            <div className="button">
                <button onClick={getAllFilms}>Browse the catalogue</button>
                <button onClick={getAFilm}>Select a film</button>
                <button onClick={getFilmTitle}>Title</button>
                <button onClick={showFilmsNicely}>Jeff</button>
            </div>  
            
            <div id ='filmDiv'>
            <table id = 'filmTable'>
               <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
               </tr>
            </table>

            </div>
        </div>
       
    );
    
}

export default Contact;

