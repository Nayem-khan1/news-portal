import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            readOnly
            defaultValue={user.displayName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            defaultValue={user.photoURL}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            readOnly
            defaultValue={user.email}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Change Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            defaultValue="Password"
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserProfile;
