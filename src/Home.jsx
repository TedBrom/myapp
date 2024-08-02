import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



function Home() {

    const [films, setFilms] = useState();
    const randFilm = async () => {

        let id = Math.floor(Math.random() * (1000 - 1 + 1) + 1)

        const response = await fetch(
            `https://sakilaapp-1663062362455.azurewebsites.net/Home/aFilm/${id}`
        ).then((response) => response.json());
            setFilms(response);
            
    };
    useEffect(() => {
        randFilm();
    }, []);

   

      function checkRating()
      {
        if(films.rating === "G")
        {
          return(
                 <p>This film is rated {films.rating} so it's a good one
                  for the kids</p>
                )
        } else if(films.rating ==="PG")
        {
          return(
                 <p>This one is likely to be good for older children
                     It's rated {films.rating}</p>
                )            
   
        } else if(films.rating ==="PG-13")
        {
             return(
                <p>We'd recommend this for teens as it's rated {films.rating}! </p>
            )
        } else if(films.rating ==="R")
        {
            return(
                <p>This one's rated for an older audience with the rating {films.rating}</p>
            )
        } else 
        {
            return <p><b>Adult only viewing is recommended. {films.rating}</b></p>
           
        }
         
        }


    return (
        <div >
                <h1>Hello and Welcome to Filmy McFilm Face</h1>
                <h2>Below is our recommended film of the day! </h2>
                <h2>Today it is...</h2>
                    
        
               
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
                 
                {films &&
                     <div>
                        <p>{films.title}</p>
                        <p>{films.description}</p>
                        <p>Released in...</p>
                        <p>{films.year}</p>
                        <p>It will cost just £{films.rentRate} per week</p>
                        <p>This epic film is going to blow your mind for {films.length} minutes</p>
                        {checkRating()}
                    </div>  
                }
            </div>
        </div>
    );
}

export default Home;