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
      <div className="innerEmailVerification">
        <Image
          alternative={"Email Icon"}
          className={"emailIcon img-fluid"}
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1678396204/AP%20Registration/Email_Icon_kjzvrr.svg"
          }
        />
        <h3 className="fontColor">Verify your email address</h3>
        <p>
          You're only a few steps away from your new wealth bulding <br />
          experience. Click the link we've sent to your email so we can <br />
          confirm it's you.
        </p>
        <p>Haven't received your email? Click the button below now!</p>
        <Link className="btn signUpBtn w-30">
          Click here to resend verification email
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
