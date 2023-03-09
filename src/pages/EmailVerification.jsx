import { Link } from "react-router-dom";
import Image from "../components/Image";

const EmailVerification = () => {
  return (
    <div className="emailVerificationContainer">
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678223705/AP%20Registration/APLogo_jbhcmo.svg"
        }
        alternative={"AP logo"}
        className={"img-fluid mt-4 ApLogo"}
      />
      <div className="innerEmailVerfication">
        <Image
          alternative={"Email Icon"}
          className={"emailIcon img-fluid"}
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1678396204/AP%20Registration/Email_Icon_kjzvrr.svg"
          }
        />
        <h3 className="fontColor">Verify your email address</h3>
        <p style={{ color: "rgba(8, 62, 91, 0.5)" }}>
          Activate your account by verifying your email address and start
          investing with Africa’s Pocket.
        </p>
        <Link className="btn signUpBtn w-30">Verify</Link>
      </div>
    </div>
  );
};

export default EmailVerification;
