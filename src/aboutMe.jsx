import React from 'react';
import Capture from './Capture.jpg';





function getAllActors(){
    fetch('http://localhost:8080/Home/allActors', { method: 'GET' })
      .then(data => data.json()) // Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

function showActorsNicely(){
    let actorDiv = document.getElementById('actorTable')

    fetch('http://localhost:8080/Home/allActors', { method: 'GET' })
    .then(res => res.json())
    .then(actors => 
        {
            actors.forEach((actor, index )=>
                {if(index <=49 ){
                    actorDiv.innerHTML += `
                                            <tr>    
                                                <td>${actor.actorId}</td>
                                                <td>${actor.firstName}</td>
                                                <td>${actor.lastName}</td>
                                            </tr>
                                            `
                                           
                }
                } ); 
        })
}



function AboutMe() {
    return (
        <div>
            <h1>this is the about me page</h1>
            <div>
                <h3>I intend to have this as a portfolio project to demonstrate my capability and or advertise myself</h3>
            </div>
            <img src={Capture} alt = "me"/>
            <div className="button">
                <button onClick={getAllActors}>Browse the actor list</button>
                <button onClick={showActorsNicely}>Browse the actor list nicely</button>
            </div>  

            <div id ='actorDiv'>
            <table id = 'actorTable'>
               <tr>
                <th>ID</th>
                <th>Forename</th>
                <th>Surname</th>
               </tr>
            </table>

            </div>

        </div>
    );
}

export default AboutMe;