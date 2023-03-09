import Form from "../components/Form";
import { BsArrowLeftShort } from "react-icons/bs";

const SignUp = () => {
  return (
    <div className="container topSection">
      <span className="icon">
        <BsArrowLeftShort />
      </span>
      <img
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1678223705/AP%20Registration/APLogo_jbhcmo.svg"
        alt="AP logo"
        className="img-fluid logoImage"
      />
      <img
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/topRightImage_uojo9w.png"
        alt="top right vector"
        className="topRightVector"
      />
      <img
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/bottomLeftVector_f5hmau.png"
        alt="bottom left vector"
        className="bottomLeftImage"
      />
      <img
        src="https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/bottomLeftImage_kf2fxd.png"
        alt="bottom left vector"
        className="bottomLeftImage"
      />

      <h1>Create your Account</h1>
      <p>It will take less than 2 minutes!</p>
      <Form />
    </div>
  );
};

export default SignUp;
