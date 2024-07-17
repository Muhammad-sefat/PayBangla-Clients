import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        mobileNumber: number,
        email,
        pin: password,
        role,
      });

      console.log(response.data);
      navigation("/");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <p className="text-2xl font-semibold">Register Here</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number</span>
                </label>
                <input
                  type="text"
                  placeholder="number"
                  className="input input-bordered"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <select
                  className="select select-bordered"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
              <p>
                Already have an Account Please{" "}
                <Link to="/" className="font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
