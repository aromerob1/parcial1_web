import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Detail()
{
    const [item, setItem] = useState(null);
    const { carModel } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/aromerob1/parcial1_web/master/datos.json');
                const data = await response.json();

                // Filtrar el elemento basado en el carModel
                const selectedItem = data.find(item => item.carModel === carModel);
                setItem(selectedItem);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [carModel]);

    if (!item) return <div>Cargando...</div>;

    return(
        <Container>
            <Row>
                <Col style={{ maxWidth: '300px' }}>
                    <img src="https://dummyimage.com/300x200.png" alt="dummy"/>
                </Col>
                <Col>
                    <h5>{item.partName}</h5>
                    <Row>
                        <Col>
                            <ul>
                                <li>Car Maker</li>
                                <li>Car Model</li>
                                <li>Car Year</li>
                                <li>Available Online</li>
                                <li>Price</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>{item.carMaker}</li>
                                <li>{item.carModel}</li>
                                <li>{item.carYear}</li>
                                <li>{String(item.available)}</li>
                                <li>{item.price}</li>
                            </ul>
                        </Col>
                    </Row>
                    Description
                    <p>{item.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Detail;