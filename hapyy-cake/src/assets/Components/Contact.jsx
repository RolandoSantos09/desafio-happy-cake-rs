import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <Form className="formbox">
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            defaultValue=""
          />
          <Form.Control.Feedback>Déjanos tus Datos</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustomUsername">
          <Form.Label>Correo</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Correo Electrónico"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor Ingresa tu Correo.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button type="submit">Enviar Datos</Button>
    </Form>
  );
}

export default Contact;
