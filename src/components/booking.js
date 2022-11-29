import React,{useState} from "react";

import Commonpage from "./homepage";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../components/booking.css";
import Sucesspage from "./sucess";
import { useNavigate } from "react-router-dom";
import { Collapse } from "bootstrap";
import Contextuse from"./context";

const Movielist = [
    {
        "id": "100",
        "name": "Iron man 2",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating": 7,
        "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military..",
        "trailer": "https://www.youtube.com/embed/wKtcmiifycU",
        "language": "English",

    },
    {
        "id": "101",
        "name": "No Country for Old Men",
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating": 8.1,
        "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then a psychopathic killer who wants money.",
        "trailer": "https://www.youtube.com/embed/38A__WT3-o0",
        "language": "English",

    },
    {
        "id": "102",
        "name": "Jai Bhim",
        "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating": 8.8,
        "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA",
        "language": "Tamil",

    },
    {
        "id": "103",
        "name": "The Avengers",
        "rating": 8,
        "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film.",
        "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
        "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8",
        "language": "English",

    },
    {
        "id": "104",
        "name": "Interstellar",
        "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating": 8.6,
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a researchers, to find a new planet for humans.",
        "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        "id": "105",
        "name": "Baahubali",
        "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating": 8,
        "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
        "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI",
        "language": "English",

    },
    {
        "id": "106",
        "name": "Ratatouille",
        "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating": 8,
        "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
        "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
        "language": "English",

    }
]
function Booking({ movie }) {
    const [toggleComponents, setToggleComponents] = useState(false);
    const navigate = useNavigate();
    const handleCollapseComponent = () => {
        setToggleComponents(!toggleComponents);
        var myCollapse = document.getElementById("collapseComponents");
        var bsCollapse = new Collapse(myCollapse);
        toggleComponents ? bsCollapse.show() : bsCollapse.hide();
        
      };
    return (
        <div className="booking " style={{ backgroundColor: "#98878F"}}>
            <div className="bookingDiv1 " >
                <div className="movies" >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            width="200"
                            background-size= "cover"
                            image={movie.poster}
                        />
                          <Button size="small" onClick={ handleCollapseComponent} style={{ paddingLeft: "350px" }}>Show less</Button>
                        <div  id="collapseComponents">
                        
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" font-family= "serif">
                                  <h5>  {movie.name}</h5>
                                </Typography>
                                <Typography variant="body2" color="text.secondary"  >
                                   {movie.summary}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button type="button" class="btn btn-primary" onClick={() => navigate("/ticket")}>Book</button>
                                <Button size="small">Rating={movie.rating}</Button>
                                <a href={movie.trailer} style={{ paddingLeft: "240px" }}>Trailer</a>
                            </CardActions>
                        </div>
                    </Card>

                </div>

            </div>

        </div >
    )
}



function Bookingpage() {
    const Movielist1 = Movielist;
    return (
       
        <div className="Parent1" style={{ backgroundColor: "#98878F"}}>
          
            <div className="Parent2">
                <Commonpage />
            </div>
            <div className="Parent2 row">
                {Movielist1.map((mv, index) => (
                    <Booking key={index} movie={mv} />
                ))}

            </div>
        </div>
    )
}

export default Bookingpage;