import React from "react";
import "../components/login .css"
import { useNavigate } from "react-router-dom";
import Commonpage from "./homepage";
import { useState } from "react";
import axios from "axios";
import "./home.css";
function Loginpage() {

    const navigate = useNavigate();
    const formdata = { email: "", password: "", error: { email: "", password: "" } };
    const [data, setdata] = useState(formdata)
    const handelchange = (e) => {
        let error = { ...data.error };
        if (e.target.value === "") {
            error[e.target.name] = `${e.target.name} is Required`;
        } else {
            error[e.target.name] = "";
        }
        setdata({ ...data, [e.target.name]: e.target.value, error });
    };
    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            const responce = await axios.post("https://movieserver25.herokuapp.com/user/signin", { ...data });
            if (responce) {
                sessionStorage.setItem("token", responce);
                navigate("/home");
            }
        }

        catch (err) {
            console.log(err)
        }

        if (data === "") {
            navigate("/");
        }

    };


    return (
        <div style={{ backgroundColor: "#8E8D8A" }} className="body">
            <div className="common row" >
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="OpText"><p>Joy Booking</p></div>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ paddingLeft: "30px" }}>
                                    <li className="nav-item" >
                                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true" >Home</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Offers</a>
                                    </li>
                                    <li className="nav-item" style={{ paddingTop: "6px" }}>
                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{ paddingTop: "5px" }}>
                                            <option selected>Location</option>
                                        </select>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <a className="nav-link active" aria-current="page" href="#" style={{ paddingLeft: "10px" }}></a>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="login row" >
                <h2 style={{color:"azure"}} >Login</h2>
                <div className="col-md-12">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" value={data.value} onChange={handelchange} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        <br />
                        <span style={{ color: "red" }}>{data.error.email}</span>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" onChange={handelchange} id="floatingPassword" name="password" value={data.value} placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                        <br />
                        <span style={{ color: "red" }}>{data.error.password}</span>
                    </div>
                    <div style={{ padding: "10px" }}> <a class="btn btn-primary" href="#" role="button" style={{color:"azure"}} onClick={handelSubmit}>Signin</a></div>

                    <div style={{ padding: "10px" }}> <span style={{ margin: "10px" ,color:"azure" }}>did't have an account?</span><a class="btn btn-primary" href="#" role="button" onClick={() => navigate("/signup")}>Signup</a></div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;