import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/userslice";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData?.email;
    const password = formData?.password;
  
    dispatch(
      loginUser({
        email,
        password,
      })
    );
    navigate("/welcome");
  };

  

  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <label>
    Email:
    <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
           />
    </label>
    <br />
    <label>
    Password:
    <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             required
           />
    </label>
    <br />
    <button type="submit">Submit</button>
    </form>
    <p>
    Don't have an account? <Link to="/signup">Sign up here.</Link>
    </p>
    </div>
    );
    };
    
    export default Login;