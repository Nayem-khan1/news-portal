import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const { createUser, profileUpdate } = useContext(AuthContext);
  const signUpHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        userProfileUpdate(name, photoURL);
        form.reset();
        setError("");
        toast.success("Register successful");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const userProfileUpdate = (name, photoURL) => {
    profileUpdate(name, photoURL)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const checkHandler = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Form onSubmit={signUpHandler}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={checkHandler}
            label={
              <>
                Accept <Link to="/terms">Terms And Condition</Link>
              </>
            }
          />
        </Form.Group>
        <Button disabled={!checked} variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
