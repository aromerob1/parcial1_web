import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardComponent({item, index, onClick})
{
    return(
        <Link to={`/home/${item.carModel}`}>
            <Card key={index} style={{ width: '18rem', marginBottom: '20px' }} id='tarjeta' onClick={onClick}>
            <Card.Img variant="imagen" src="https://dummyimage.com/300x200.png" />
            <Card.Body>
                <Card.Title>{item.partName}</Card.Title>
                <Card.Text>
                <h5>{item.carMaker}</h5>
                <p>{item.price}•{item.carYear}</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </Link>
    );
}

export default CardComponent;