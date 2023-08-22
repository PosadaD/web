import "./home.css"
import Loading from "./components/loadig";
import { useEffect, useState } from "react";
import React from 'react';
import Fade from 'react-reveal/Fade';
import dogLeft from "./img/Dogleft-size.png"
import Particle from "./components/particles";
import profile from "./img/profile.png"
import nom1 from "./img/nom1.png"
import nom2 from "./img/nom2.png"
import nom3 from "./img/nom3.png"
import nom4 from "./img/nom4.png"
import nom5 from "./img/nom5.png"
import {TbGuitarPickFilled} from "react-icons/tb"   
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import {IoIosDesktop} from "react-icons/io"
import { Link } from "react-router-dom";
import py1 from "./img/py1.png"
import py2 from "./img/py2.png"
import py3 from "./img/py3.png"
import py4 from "./img/py4.png"
import dg1 from "./img/dg1.png"
import dg2 from "./img/dg2.png"


function Home(){

    const [isLoading, setIsLoading] = useState(true);

    //Array of images to preload
    const images = [dogLeft, profile, nom1, nom2, nom3, nom4, nom5, py1, py2, py3, py4];

    //Preload images
    const preloadImages = () => {
      return Promise.all(
        images.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = image;
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
    var txt = "  Hey there! I’m a 23 years old Software engineer student who’s also diving into tech world as a front-end developer, all of this as a result of a dream of mine to someday become a full stack developer. My passion for technology started with the intention to help and support those who struggle to understand the use of it, -because, let’s face it, we’ve all been there at some point. So, as I navigate the complexities of coding and designing, I’m not just focusing on making digital experiences, but also weaving my way trough a journey that’s just as much important to helping others at it is about increasing my own growth.";
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
                            <Fade right>
                                <img alt="" src={profile}></img>
                            </Fade>
                        </div>
                    </div>
                    <div className="section project">
                        <div className="prosect prosection1">
                            <Fade up>
                                <div className="textcontainer">
                                    <h1>Library for ITA</h1>
                                    <p>It is a website created with React, featuring various sections that break down the NOM-001-SEDE-2012. This information is crucial for the electrical engineering field, and the website was developed as a project to provide students with centralized access to this information.</p>
                                    <Link to={"../ITA"}><button>More</button></Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="prosect prosection2">
                            <IoIosDesktop />
                            <Swiper  modules={[Autoplay]}
                                        autoplay={{ delay: 1500 }} 
                                        className="prosection2swiper">
                                <SwiperSlide><img alt="" src={nom1}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={nom2}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={nom3}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={nom4}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={nom5}></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="section project">
                        <div className="prosect prosection2">
                            <IoIosDesktop />
                            <Swiper  modules={[Autoplay]}
                                        autoplay={{ delay: 1500 }} 
                                        className="prosection2swiper">
                                <SwiperSlide><img alt="" src={py1}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={py2}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={py3}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={py4}></img></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="prosect prosection1">
                            <div className="textcontainer">
                                <h1>Posada's website</h1>
                                <p>This site was made with react. I created this project from scratch and part of its structure is designed with the purpose of provide information and data not only from the previous projects carried out, but also from the information that has been consulted through their elaboration, as well as points of view that I consider useful to know, exercises, examples or even competitive programming.</p>
                                <Link to={"../py"}><button>More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="section project">
                        <div className="prosect prosection1">
                            <Fade up>
                                <div className="textcontainer">
                                    <h1>Dino Game</h1>
                                    <h4>coming soon...</h4>
                                    <p>This website is made with react, firebase, paypal and google analytics. It is a collaborative project in which I am collaborating both in the front-end and in the development of the game.</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="prosect prosection2">
                            <IoIosDesktop />
                            <Swiper  modules={[Autoplay]}
                                        autoplay={{ delay: 1500 }} 
                                        className="prosection2swiper">
                                <SwiperSlide><img alt="" src={dg1}></img></SwiperSlide>
                                <SwiperSlide><img alt="" src={dg2}></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="section contact">
                        <div className="contactsec contactsection1">
                            <div className="contactsection1bg">
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
                        </div>
                        <div className="contactsec contactsection2">
                            <Fade right>
                                <img alt="" src={dogLeft}></img>
                            </Fade>
                        </div>
                    </div>   
                </div>
            }
        </>
    )
}


export default Home;