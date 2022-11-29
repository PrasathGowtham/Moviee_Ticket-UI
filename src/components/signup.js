import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signuppage() {
    const navigate = useNavigate();
    const formdata = { name: "", email: "", password: "", confirmpassword: "" };
    const [data, setdata] = useState(formdata)
    const handelchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            const responce = await axios.post("https://movieserver25.herokuapp.com/user/signup", { ...data });
            console.log(responce)
            if (responce) {
                setdata({
                    name: "", email: "", password: "", confirmpassword: ""
                })
                navigate("/")
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="login row" style={{ backgroundColor: "#D1D7E0", }}>
            {console.log("data", data)}
            <h2>Signup</h2>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="name" value={data.name} id="floatingInput" placeholder="name" onChange={handelchange} />
                    <label for="floatingInput">Name</label>

                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" name="email" value={data.email} onChange={handelchange} placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>

                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" name="password" value={data.password} onChange={handelchange} placeholder="Password" />
                    <label for="floatingPassword">Password</label>

                </div>
                <div className="form-floating" style={{ marginTop: "15px" }}>
                    <input type="password" className="form-control" id="floatingPassword" name="confirmpassword" onChange={handelchange} value={data.conformpassword} placeholder="Password" />
                    <label for="floatingPassword">Conform Password</label><br />
                    <a class="btn btn-primary" role="button" onClick={handelSubmit}>Submit</a>

                </div>
                <div style={{ padding: "10px" }}> <span style={{ margin: "10px" }}>have an account?</span><a class="btn btn-primary" role="button" onClick={() => navigate("/")}>Login</a></div>
            </div>
        </div>
    )
}

export default Signuppage;