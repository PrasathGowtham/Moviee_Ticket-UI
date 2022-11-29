import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookingpage from "../components/booking";
import Loginpage from "../components/login";
import Commonpage from "../components/homepage";
import Signuppage from "../components/signup";
import Ticket from "../components/image/ticket";
import Sucesspage from "../components/sucess";
function Routepath() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signuppage />} />
                    <Route path="/" element={<Loginpage />} />
                    <Route path="/home" element={<Bookingpage />} />
                    <Route path="/ticket" element={<Ticket />} />
                    <Route path="/book" element={<Sucesspage />} />
                </Routes>


            </BrowserRouter>

        </>
    )
}


export default Routepath;