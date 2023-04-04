import { Link } from "react-router-dom";
import Image from "../components/Image";

const Verified = () => {
  return (
    <div
      className="verifiedContainer d-flex flex-column justify-content-center align-items-center
    "
    >
      <div className="innerVerifiedContainer d-flex flex-column align-items-center">
        <Image
          imageLink={
            "https://res.cloudinary.com/dogmqg8to/image/upload/v1678606109/AP%20Registration/tick_icon_bwppcs.png"
          }
          className={"img-fluid"}
        />
        <h3>Your account is verified!</h3>
        <p>We're excited to welcome you!</p>
        <Link to={"#"} className={"btn signUpBtn"}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Verified;
