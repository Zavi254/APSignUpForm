import "../form/form.styles.scss";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Form = () => {
  const navigate = useNavigate();

  const { setSignedIn } = useContext(UserContext);

  const [error, setError] = useState(null);

  // form validation rules
  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("Please enter your first name")
      .min(3, "Your name is below 3 characters"),
    last_name: Yup.string()
      .required("Please enter your last name")
      .min(3, "Your name is below 3 characters"),
    email: Yup.string().required("Please enter your email address").min(2),
    password: Yup.string()
      .required("Please Enter a Password you can remember")
      .min(8, "Please enter a minimum of 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Please add atleast one number, one letter & one special character"
      ),
    confirmPassword: Yup.string()
      .required("Please enter a password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm(formOptions);
  const { errors } = formState;

  async function submitForm(data) {
    try {
      const response = await fetch(
        "https://ap-backend-0p5c.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        reset();
        setSignedIn(true);
        navigate("/verify-email");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="fname d-md-flex justify-content-around w-100">
        <div className="firstName">
          <label>First Name</label> <br />
          <input type="text" placeholder="Shiko" {...register("first_name")} />
          {errors.first_name?.message && (
            <div className="alert alert-danger alertContainer">
              {errors.first_name?.message}
            </div>
          )}
        </div>
        <div className="lastName">
          <label>Last Name</label> <br />
          <input type="text" placeholder="Doe" {...register("last_name")} />
          {errors.last_name?.message && (
            <div className="alert alert-danger alertContainer">
              {errors.last_name?.message}
            </div>
          )}
        </div>
      </div>

      <div className="email">
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="abe@email.com"
          {...register("email")}
        />

        {errors.email?.message && (
          <div className="alert alert-danger alertContainer">
            {errors.email?.message}
          </div>
        )}
        {error && (
          <div className="alert alert-danger alertContainer">{error}</div>
        )}
      </div>
      <div className="passwordContainer d-md-flex justify-content-around w-100">
        <div className="password">
          <label>Create Password</label> <br />
          <input
            type="password"
            placeholder="Create a password"
            {...register("password")}
          />
          {errors.password?.message && (
            <div className="alert alert-danger alertContainer">
              {errors.password?.message}
            </div>
          )}
        </div>
        <div className="confirmPassword">
          <label>Confirm Password</label> <br />
          <input
            type="password"
            placeholder="Confirm your Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <div className="alert alert-danger alertContainer">
              {errors.confirmPassword?.message}
            </div>
          )}
        </div>
      </div>
      <button className="btn w-100 signUpBtn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default Form;
