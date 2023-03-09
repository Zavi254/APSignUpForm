const Form = () => {
  return (
    <form>
      <div className="firstName">
        <label>First Name</label> <br />
        <input type="text" name="fname" placeholder="Shiko" />
      </div>
      <div className="lastName">
        <label>Last Name</label> <br />
        <input type="text" name="lname" placeholder="Doe" />
      </div>
      <div className="email">
        <label>Email</label>
        <br />
        <input type="email" name="email" placeholder="abe@email.com" />
      </div>
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

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Form;
