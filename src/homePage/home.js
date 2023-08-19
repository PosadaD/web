import "./home.css"
import Loading from "./components/loadig";
import { useEffect, useRef, useState } from "react";
import React from 'react';
import Fade from 'react-reveal/Fade';
import dogLeft from "./img/Dogleft-size.png"
import Particle from "./components/particles";
import {TbGuitarPickFilled} from "react-icons/tb"    



function Home(){

    const [isLoading, setIsLoading] = useState(true);

    //Array of images to preload
    const images = [];

    //Preload images
    const preloadImages = () => {
      return Promise.all(
        images.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            // img.src = image;
          });
        })
      );    
    };

    preloadImages()
      .then(() => {
        //console.log('All images preloaded successfully');
        setIsLoading(previsLoading => previsLoading = false);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setIsLoading(true);
      });



    //tipyng text animation
    const [typetext, settypetext] = useState("")
    var txt = "  Hey there! I'm a 23-year-old student of Systems Engineering who's also diving headfirst into the world of tech as a front-end developer. You see, I've got this dream of becoming a full stack developer someday. My passion for technology started from a place of lending a hand to those struggling to grasp it – because, let's face it, we've all been there at some point. So, as I navigate the complexities of coding and design, I'm not just crafting digital experiences; I'm weaving my way through a journey that's as much about helping others as it is about my own growth.";
    var speed = 50;

    useEffect(() => {
        var i=0;

        function typeWriter() {
            if(i< txt.length){
                settypetext( prev => prev + txt.at(i))
                i++
                setTimeout(typeWriter, speed); 
            }
        }
  
        typeWriter();
    }, [])



    //animation section 


    return(
        <>
            {isLoading ? 
                <>
                    <Loading />
                </>
            :
                <div className="homeconatiner">
                    <div className="section main">
                        <Particle />
                        <div className="mainsec mainsection1">
                            <div className="mainsection1Title">
                                <div className="mainsection1TitleName">
                                    <h1>I'm </h1>
                                    <h1>&nbsp;Diego Posada</h1>
                                </div>
                                <h4>Front-end developer, Student and a dog lover</h4>
                            </div>
                            <div className="mainsection1text">
                                {typetext}
                            </div>
                        </div>
                        <div className="mainsec mainsection2">
                            <TbGuitarPickFilled />
                        </div>
                    </div>
                    <div className="section project1">
                        section1
                    </div>
                    <div className="section project2">
                        section1
                    </div>
                    <div className="section contact">
                        <div className="contactsec contactsection1">
                            <div className="contactsection1Title">
                                <h1>Let's make something</h1>
                                <h1>&nbsp;awesome together.</h1>
                            </div>
                            <Fade bottom>
                                <div className="contactsection1Text">
                                    <h4>Feel free to write to me to work together, for any questions/comments or just to say hello.</h4>
                                    <h1>dapiposada@gmail.com</h1>
                                </div>
                            </Fade>             
                        </div>
                        <div className="contactsec contactsection2">
                            <Fade right>
                                <img src={dogLeft}></img>
                            </Fade>
                        </div>
                    </div>   
                </div>
            }
        </>
    )
}


export default Home;