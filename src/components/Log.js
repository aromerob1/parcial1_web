import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Log()
{   
    const [showNext, setShowNext] = useState(false);
    const [formValues, setFormValues] = useState({ email: "", password: ""});
    const [validationStates, setValidationStates] = useState({
        emailState: true,
        passwordState: true
    });
    const handleEmailChange = e => {
        setFormValues({ ...formValues, email: e.target.value });
      };
      const handlePasswordChange = e => {
        setFormValues({ ...formValues, password: e.target.value });
        validatePassword(e.target.value);
      };
    const clickNext = () => {
        validateEmail(formValues.email);
        setShowNext(true);
      };
    const clickSubmit = () => {
        validateEmail(formValues.email);

      };
    const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setValidationStates({ ...validationStates, emailState: emailRegex.test(email) });
      };
      const validatePassword = password => {
        const isValid = password.length >= 9 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
        setValidationStates({ ...validationStates, passwordState: isValid });
      };
    return(
        
        <Container>
                        {!showNext && 
            <div>
            <h3>
            Acceder
            </h3>
            <h4>
            Usa tu cuenta de UniAlpes
            </h4>
            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    onChange={handleEmailChange}
                    value={formValues.email}
                />
                { !validationStates.emailState && <Form.Text className="text-danger">Invalid email address.</Form.Text>}
                </Form.Group>
            <h5 className='text-primary'>¿Olvidaste el correo electrónico?</h5>
        <Button variant="primary">
          Crear cuenta
        </Button>
        <Button variant="primary" onClick={clickNext}>
          Siguiente
        </Button>
      </Form>
      </div>
}
{showNext &&
    <div>
    <h3>
    {formValues.email}
    </h3>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={handlePasswordChange}
            value={formValues.password}
          />
          { !validationStates.passwordState && 
            <Form.Text className="text-danger">Your password should have numbers, letters and be at least 9 characters long.</Form.Text>}
        </Form.Group>
        <h5>Mostrar contraseña</h5>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
</div>
<Button variant="primary" onClick={clickSubmit}>
  Siguiente
</Button>
</Form>
</div>
}
        </Container>
        
    )
}

export default Log;