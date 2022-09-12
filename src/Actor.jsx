import React from 'react';
import Capture from './Capture.jpg';
import { useEffect } from 'react';
import { useState } from 'react';


function Actor() {

/*
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


*/
    const [actors, setActors] = useState();

    const getActorsNicely = async () => {
        const response = await fetch(
            `http://localhost:8080/Home/allActors`
        ).then((response ) => response.json());
        setActors(response);
    };
    
    useEffect(() => {
        getActorsNicely();
    }, []);



    return (
        <div>
            <h1>this is the about me page</h1>
            <div>
                <h3>I intend to have this as a portfolio project to demonstrate my capability and or advertise myself</h3>
            </div>
            <img src={Capture} alt = "me"/>
           

            <div>
                <table>
                  {actors &&
                    actors.map((actor) =>
                      (
                        <tr>
                            <td>{actor.actorId}</td>
                            <td>{actor.firstName}</td>
                            <td>{actor.lastName}</td>
                        </tr>
                      ))
                  }
                </table>
            </div>

        </div>
    );
}

export default Actor;