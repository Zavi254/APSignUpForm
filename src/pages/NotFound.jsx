import { Link } from "react-router-dom";
import Image from "../components/Image";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center p-5">
      <Image
        imageLink={
          "https://res.cloudinary.com/dogmqg8to/image/upload/v1678607660/AP%20Registration/page-not-found_qjdm4a.svg"
        }
        className={"img-fluid mb-2"}
      />
      <h3 className="mb-5 fontColor">Page Not Found</h3>
      <p className="text-center">The page you are looking for doesn't exist or has been moved</p>
      <Link to={'/'} className="btn btn-primary">Go Home</Link>
    </div>
  );
}

export default NotFound;
