import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className={""}>
      <div className="fname d-md-flex justify-content-around w-100">
        <div className="firstName">
          <label>First Name</label> <br />
          <input type="text" name="fname" placeholder="Shiko" />
        </div>
        <div className="lastName">
          <label>Last Name</label> <br />
          <input type="text" name="lname" placeholder="Doe" />
        </div>
      </div>

      <div className="email">
        <label>Email</label>
        <br />
        <input type="email" name="email" placeholder="abe@email.com" />
      </div>
      <div className="passwordContainer d-md-flex justify-content-around w-100">
        <div className="password">
          <label>Create Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
          />
        </div>
        <div className="confirmPassword">
          <label>Confirm Password</label> <br />
          <input
            type="password"
            name="password"
            placeholder="Confirm your Password"
          />
        </div>
      </div>

      <Link className="btn w-100 signUpBtn" to={"/emailVerification"}>
        Sign Up
      </Link>
    </form>
  );
};

export default Form;
