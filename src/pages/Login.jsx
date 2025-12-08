import { useState } from "react";
import axios from "axios";
import toast from "not-a-toast";
import "not-a-toast/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { BASE_URL } from "../../ constants/constant";
import validator from "validator"

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "aditya@gmail.com",
    password: "123",
  });


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    async function loginUser() {
      if (!validator.isEmail(formData.email)) {
        throw new Error("Please enter valid email");
      }
      const { data } = await axios.post(
        `${BASE_URL}/api/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      toast({
        message: "Login Successfull",
        duration: 2000,
        autoClose: true,
        progressBarColor: "#52a53b", //TODO: no hardcode value

        pauseOnHover: true,
      });
      console.log(data);

      dispatch(addUser(data.user));
      navigate("/feed")
      console.log("Login success:", data);
    }
    try {
      if (isLogin) {
        loginUser()
      } else {
        if (!validator.isEmail(formData.email)) {
          throw new Error("Please enter valid email");
        }
        if (!validator.isStrongPassword(formData.password)) {
          throw new Error("Please enter strong password");
        }
        const { data } = await axios.post(`${BASE_URL}/api/auth/register`, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        });
        toast({
          message: "Signup Successfull",
          duration: 2000,
          autoClose: true,
          progressBarColor: "#52a53b",
          pauseOnHover: true,
        });
        console.log("Signup success:", data);
        loginUser()
      }
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-sm mt-2">
        <h2 className="font-semibold text-xl text-center mt-5">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <div className="card-body">
          {error && (
            <p className="text-red-500 text-center text-sm mb-2">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <fieldset className="fieldset mb-2">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  className="input"
                  placeholder="Your first name"
                />

                <legend className="fieldset-legend mt-2">Last Name</legend>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  className="input"
                  placeholder="Your last name"
                />
              </fieldset>
            )}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="input"
                placeholder="Type email here"
              />

              <legend className="fieldset-legend mt-2">Password</legend>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                // type="password"
                className="input"
                placeholder="Type password here"
              />
            </fieldset>

            <button type="submit" className="btn btn-primary w-full mt-4">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="text-blue-600 font-medium hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
