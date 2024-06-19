
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Auth.css"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const savedIdentifier = localStorage.getItem("identifier");
    const savedPassword = localStorage.getItem("password");
    if (savedIdentifier || savedPassword) {
      setFormData({
        identifier: savedIdentifier || "",
        password: savedPassword || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("API", formData);
      console.log("Удачно", response.data);

      localStorage.setItem("identifier", formData.identifier);
      localStorage.setItem("password", formData.password);
      navigate('/#loggedin');
    } catch (error) {
      console.error("Ошибка", error);
      setSubmitError("Не удалось");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="identifier">Username or Email</label>
          <input
            id="identifier"
            name="identifier"
            type="text"
            value={formData.identifier}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {submitError && <p>{submitError}</p>}

        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
