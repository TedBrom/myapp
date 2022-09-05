import React from 'react';



function getAllFilms() {

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



function Contact() {
    return (
        <div>
            <h1>this is the contacts page</h1>
             <div className="button">
                    <button onClick={getAllFilms}>Browse the catalogue</button>
                    <button onClick={getAFilm}>Select a film</button>
                    <button onClick={getFilmTitle}>Title</button>
            </div>
            
        </div>  
    );
    
}

export default Contact;

