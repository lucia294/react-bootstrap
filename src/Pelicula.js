import './App.css';
import {useEffect, useState} from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Pelicula = ({data, handler})=>{
  const [toogleSinopsis, setToogleSinopsis] = useState(false);

  return(
   <Col md={3} >
         <Card className='h-100'>
            <Card.Img src={data.foto} variant="top"></Card.Img>  
            <Card.Body>
                  <Card.Title>{data.titulo}</Card.Title>    
                  {toogleSinopsis&&<Card.Text>{data.sinopsis}</Card.Text>}
            </Card.Body>  
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Director:{data.director}</ListGroup.Item>
                <ListGroup.Item>Actores:{data.actoresPrincipales}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary" onClick={()=>setToogleSinopsis(!toogleSinopsis)}>{toogleSinopsis?'Menos' :'Más'}</Button>      
            <Button variant="secondary" onClick={()=>handler(data)}>Seleccionar</Button>      
        </Card>   
   </Col>
  );
};
export default Pelicula;