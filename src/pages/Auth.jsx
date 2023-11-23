import { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = () => {
    setVariant((currentVariant) => {
      return currentVariant === "login" ? "register" : "login";
    });
  };

  const navigate = useNavigate()
  const register = async () => {
    try {
      // Registration logic here
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      navigate('/dealer/dashboard')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="bg-white text-black shadow-sm px-5  p-4 rounded" style={{width: "50vw"}}>
        <h2 className="text-black text-4xl mb-4 text-center">
          {variant === "login" ? "Sign In" : "Register"}
        </h2>
        <div className="form-group mb-3">
          {variant === "register" && (
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-black">
                Username
              </label>
              <Input
                label="Username"
                onChange={(e) => setName(e.target.value)}
                id="username"
                type="text"
                value={name}
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-black">
              Email
            </label>
            <Input
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-black">
              Password
            </label>
            <Input
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              value={password}
            />
          </div>

          <button
            onClick={variant === "register" ? register : login}
            className="btn btn-primary w-100"
          >
            {variant === "login" ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="text-center">
          <p
            className={`text-black mt-12 ${
              variant === "login" ? "" : "text-black"
            }`}
          >
            {variant === "login"
              ? "First time using this App ?"
              : "Already have an account?"}
          </p>
          <p
            onClick={toggleVariant}
            className="text-black ml-2 mt-1 cursor-pointer"
          >
            {variant === "login" ? "Create an Account" : "Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
