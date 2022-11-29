import React,{useContext}from "react";
import "../components/login .css"
import { useNavigate } from "react-router-dom";
import Commonpage from "./homepage";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Contextuse} from "./context";
function Sucesspage() {
const data =useContext(Contextuse)
    const navigate = useNavigate();
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );


    return (
        <div>
            <Commonpage />
            <div className="login row" style={{ backgroundColor: "#D1D7E0" }}>
                <h1 style={{ fontFamily: "italic" }}> YOUR BOOKING HAS COMPLETED,THANK YOU.</h1>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">YOUR TICKET={ data}</Card>
                </Box>
                <button type="button" class="btn btn-success" onClick={() => navigate("/home")} style={{ marginTop: "150px" }}>Home</button>
            </div >
        </div>
    )
}

export default Sucesspage;