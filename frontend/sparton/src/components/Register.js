import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

    return (
        <>
        <h2>Register</h2>
        <Form>
            {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
        Register
        </Button>


        </Form>

        </>
    )
}


export default Register;