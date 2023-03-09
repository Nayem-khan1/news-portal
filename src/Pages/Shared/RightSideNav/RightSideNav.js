import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const RightSideNav = () => {
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const { loginWithGoogle, logInWithGithub } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    loginWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIn = () => {
    logInWithGithub(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("")
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Log in With Google
        </Button>
        <Button
          onClick={handleGithubSignIn}
          className="mb-2"
          variant="outline-dark"
        >
          <FaGithub></FaGithub> Log in With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin></FaLinkedin> Linkedin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaReddit></FaReddit> Reddit
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
