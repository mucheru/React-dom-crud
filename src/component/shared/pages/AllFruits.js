import React, { useState,useEffect } from "react";
import axios, { all } from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";





function AllFruits() {
    const [allFruits, setAllFruits]=useState([]); 
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:3000/fruits").then((response) => {
          setAllFruits(response.data);
        });
      }, []);
    return (
        <>
        <Row xs={1} md={3} className="g-2">
          {allFruits.map((item)=>(
            <Col key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Quantity(KG UNITS)-{item.quantity}</Card.Text>
                  <Card.Text>PRICE- {item.price}</Card.Text>
                  <Button variant="primary" onClick={() => navigate(`/update-fruit/${item.id}`)}	>	  Edits	</Button>
                </Card.Body>

              </Card>
            </Col>
          ))}

        </Row>
        </>
    )
  }
  export default AllFruits;