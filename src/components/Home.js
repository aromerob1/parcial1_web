import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { Container, Row, Col } from 'react-bootstrap';
import Detail from './Detail';


function Home() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/aromerob1/parcial1_web/master/datos.json');

        if (!response.ok) {
          throw new Error('Error');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col md={4} key={index} className='d-flex justify-content-center'>
            <CardComponent item={item} onClick={() => handleCardClick(item)}/>
          </Col>
        ))}
      </Row>
      {selectedItem && <Detail item={selectedItem} />}
    </Container>
  );
}

export default Home;
