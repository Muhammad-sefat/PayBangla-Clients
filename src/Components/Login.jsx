import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { identifier, pin });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <p className="text-2xl font-semibold">Login Here</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email or Mobile Number</span>
              </label>
              <input
                type="text"
                placeholder="email or mobile number"
                className="input input-bordered"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PIN</span>
              </label>
              <input
                type="password"
                placeholder="PIN"
                className="input input-bordered"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="font-medium">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
