import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function MyClock() {
  
  const [films, setFilms] = useState();
  const [value, setValue] = useState(new Date());
  
  const [show, setShow] = useState(false);
  const [activeFilm, setActiveFilm] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const getFilmsInfo = async () => {
      const response = await fetch(
          `https://sakilaapp-1663062362455.azurewebsites.net/Home/allFilms`
      ).then((response ) => response.json());
      setFilms(response);
  };



 useEffect(() => 
  {
    const interval = setInterval(() => setValue(new Date()), 1000);
    getFilmsInfo();

    return () => {
      clearInterval(interval);
    };

  }, []);


    function filmFinishTime(film){

        let d = new Date();
        let c = new Date();
        d.setMinutes(d.getMinutes() + film.length)
        alert("The current date and time is " + c + " your film will finish at  " + d);
    };

    function filmTimeWithOneBreak(film){
      let d = new Date();
      let c = new Date();
      let b = 10;
      d.setMinutes(d.getMinutes() + film.length + b )
      alert("The current date and time is " + c + " your film will finish at  " + d + " if you have one 10 minute break!");
    };
     function filmTimeWithTwoBreaks(film){
      let d = new Date();
      let c = new Date();
      let b = 20;
      d.setMinutes(d.getMinutes() + film.length + b )
      alert("The current date and time is " + c + " your film will finish at  " + d + " if you have two 10 minute breaks!");
    };
    function threeBreaksOhNo(film){
      let d = new Date();
      let c = new Date();
      let b = 30;
      d.setMinutes(d.getMinutes() + film.length + b )
      alert("The current date and time is  " + c + "\nYour film will finish at  " + d +
       " if you have three 10 minute breaks! \nI would recommend seeing a Doctor, however...");
    }




  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
        <Clock value={value} />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
          <h2>It's currently {value.toLocaleString()}</h2>
      </div>
      <div>
        <table>
          <th>Title</th>
          <th>Description</th>
          <th>Film Duration (in minutes)</th>

          {films &&
                films.map((film) => 
                (          
                <tr>    
                  <td>{film.title}</td>
                  <td>{film.description}</td>
                  <td><Button onClick={ ()=> {setActiveFilm(film); handleShow()}}>{film.length}</Button></td>
                </tr>
                ))
            }
        </table>
      </div>    
        
      <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pick your option</Modal.Title>
            </Modal.Header>
            <Modal.Body>Here's a handy calculator, it'll tell you when your film ends </Modal.Body>
            <Button variant="secondary" onClick={() => filmFinishTime(activeFilm)}>
                No break
              </Button>
              <Button variant="secondary" onClick={() => filmTimeWithOneBreak(activeFilm)}>
                One mid way break
              </Button>
              <Button variant="secondary" onClick={() => filmTimeWithTwoBreaks(activeFilm)}>
                Two breaks because you're weak bladdered
              </Button>
              <Button variant="secondary" onClick={() => threeBreaksOhNo(activeFilm)}>
                Three breaks are you joking? Alright...
              </Button>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
    </div>
   


  );


}
export default MyClock;