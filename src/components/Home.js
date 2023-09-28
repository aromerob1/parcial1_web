import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home()
{
const [datos, setDatos] = useState([]);
const url = 'https://raw.githubusercontent.com/aromerob1/parcial1_web/master/datos.json';
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  
    })
    .then(data => {
        console.log(data);
        setDatos = data;
    })
    .catch(error => {
        console.log('Hubo un problema con la petición Fetch:', error.message);
    });

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{datos[0]}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default Home;