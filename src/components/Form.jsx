import { useState } from "react";
// import { Link } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      setPasswordError(false);
      fetch("https://ap-backend-0p5c.onrender.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setPasswordError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fname d-md-flex justify-content-around w-100">
        <div className="firstName">
          <label>First Name</label> <br />
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="first_name"
            placeholder="Shiko"
            required
          />
        </div>
        <div className="lastName">
          <label>Last Name</label> <br />
          <input
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="last_name"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="email">
        <label>Email</label>
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="abe@email.com"
          required
        />
      </div>
      <div className="passwordContainer d-md-flex justify-content-around w-100">
        <div className="password">
          <label>Create Password</label> <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="confirmPassword">
          <label>Confirm Password</label> <br />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
            required
          />
          {passwordError && (
            <div className="alert alert-danger">
              <strong>Not Matching Password!!!</strong>
            </div>
          )}
        </div>
      </div>

      {/* <Link
        onSubmit={handleSubmit}
        className="btn w-100 signUpBtn"
        to={"#"}
      >
        Sign Up
      </Link> */}
      <button className="btn w-100 signUpBtn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Form;
