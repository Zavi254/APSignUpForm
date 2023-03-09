import Form from "../components/Form";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "../components/Image";

const SignUp = () => {
  return (
    <div className="container topSection">
      <span className="icon">
        <BsArrowLeftShort />
      </span>
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678223705/AP%20Registration/APLogo_jbhcmo.svg"
        }
        alternative={"AP logo"}
        className={"img-fluid logoImage"}
      />
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/topRightImage_uojo9w.png"
        }
        alternative={"top right vector"}
        className={"topRightVector"}
      />
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/bottomLeftVector_f5hmau.png"
        }
        alternative={"bottom left vector"}
        className={"bottomLeftImage"}
      />
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678191654/AP%20Registration/bottomLeftImage_kf2fxd.png"
        }
        alternative={"bottom left vector"}
        className={"bottomLeftImage"}
      />

      <h1 className="text-center">Create your Account</h1>
      <p className="text-center">It will take less than 2 minutes!</p>
      <Form />
      <div
        id="or-divider"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="orBorder"></div>
        <p>or</p>
        <div className="orBorder"></div>
      </div>
      <Button
        icon={<FcGoogle />}
        text={"Sign Up with Google"}
        className={"btn w-100 googleBtn mb-5"}
      />
      <p className="text-center">
        By signing up, you agree to the{" "}
        <span>Terms of Use & Privacy Policy</span>
      </p>
      <p className="text-center">
        I already have an account. <a href="#">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
