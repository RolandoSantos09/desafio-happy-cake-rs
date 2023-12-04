import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <Container>
      <div className="boxTitle">
        <h1>Bienvenidos a Happy Cake</h1>
      </div>
      <div className="boxCards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.caprichitosdulces.cl/wp-content/uploads/2022/09/Screenshot_20220919-121111_Instagram-200x200.jpg"
          />
          <Card.Body>
            <Card.Title>Pasteles</Card.Title>
            <Card.Text>
              Quieres sorprender con un pastel increíble?, revisa nuestro
              catálogo y elige la mejor opción para regalar algo inolvidable.
            </Card.Text>
            <Button variant="primary">Cotiza Aquí</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://biencasero.clarin.com/advf/imagenes/4db892893be66_200x200.jpg"
          />
          <Card.Body>
            <Card.Title>Cupcakes</Card.Title>
            <Card.Text>
              Tenemos mil opciones de Cupcakes para toda la familia, escríbenos
              y pide el que más te guste, también personalizamnos a tu gusto.
            </Card.Text>
            <Button variant="primary">Cotiza Aquí</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/foto-gratis/cono-helado-flota-agua-helado-frente_1340-35133.jpg?q=10&h=200"
          />
          <Card.Body>
            <Card.Title>Postres</Card.Title>
            <Card.Text>
              Te sorprenderás con la variedad de postres que puedes llevar a tu
              mesa, regalonea a tu familia con todas las delicias que hay en
              nuestra carta .
            </Card.Text>
            <Button variant="primary">Cotiza Aquí</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
