import React, { useState ,useRef} from "react";
import "./ticket.css";
import Commonpage from "../homepage";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { color, style } from "@mui/system";
import { useNavigate } from "react-router-dom";

function Ticket() {
   const ref = useRef();
    const navigate=useNavigate();
    const [book, setbook] = useState(0);
    const [time, settime] = useState("");
    const handelIncrement = (e) => {
        if (e.target.innerText === "A") {
            setbook(book + 1)
            e.target.innerText = "B";
            e.target.style.color = "red";
        }
        else {
            setbook(book - 1);
            e.target.innerText = "A";
            e.target.style.color = "black";
        }
    }

    let handelTime = (e) => {

        settime(time + e.target.innerText)
    }
    return (
        <div style={{ backgroundColor:"#D1D7E0" }}>
          
            <Commonpage />
            <div className="row">

                <div className="alignseat col-8">
                    <div className="timing col-12"> <span>Show Timings =</span> <Button variant="text" name="time" onClick={handelTime}>9.00Am</Button> <Button variant="text" onClick={handelTime}>12.30Pm</Button> <Button variant="text" onClick={handelTime}>4.00Pm</Button> <Button variant="text" onClick={handelTime}>8.00Pm</Button></div>
                    <div className=" col-12 row" style={{ paddingLeft: "180px" }}> <tr>
                  
                        <td><div class="seat" > <a onClick={(e) => handelIncrement(e)}>A</a>  </div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat   disabled_seat"></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                    </tr>
                        <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat"></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat"></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat "></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>

                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat"></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat"></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat  disabled_seat"></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr> <tr>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                            <td><div class="seat" ><a onClick={(e) => handelIncrement(e)}>A</a></div></td>
                        </tr>
                    </div>
                    <div ><span><strong> Screen This Way</strong></span>
                        <p> A=Available B=Booked </p>

                    </div>
                </div>
                <div className="col-4 screen" style={{ paddingTop: "100px" }}>
                    <div className="screeninner">
                        <div> <h2>MOVIEE(U/A) - Part One - Tamil
                             | 2D | U/A</h2></div>
                        <h4>{time}</h4><h4>	&#8377; 120</h4>
                        <h4> Booked Tickets : {book}</h4>
                        <h4>Total Price : &#8377; {book * 120}</h4>
                       
                    </div>
                    <div style={{ paddingTop: "100px" ,color:"black"}}><button type="button" class="btn btn-success" onClick={()=>navigate("/book")}>BOOK NOW</button></div>
                </div>
            </div>
        </div>
    )
}


export default Ticket; 