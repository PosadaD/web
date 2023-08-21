import "./Generalstyle.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import py1 from "../../homePage/img/py1.png"
import py2 from "../../homePage/img/py2.png"
import py3 from "../../homePage/img/py3.png"
import py4 from "../../homePage/img/py4.png"
import Loading from "./components/loadig"


function ITA(){

    const [isLoading, setIsLoading] = useState(true);

    //Array of images to preload
    const images = [py1, py2, py3, py4];

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


    return(
        <div className="ITAcontainer">
            {isLoading ?
                <Loading />

                :

                <>
                    <div className="cont ">
                        <div className="secttitle sect">
                            <div className="text"> 
                                <h1>Posada's website</h1>
                                <p>This project was made with React. Its development has led to several changes and implementations to show more than just the visualization of projects, it has become a page to share what has been learned.</p>
                            </div>
                        </div>
                        <div className="sectimg sect">
                            <img alt="" src={py1}></img>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="sectimg sect">
                            <img alt="" src={py2}></img>
                        </div>
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>About ths project</h1>
                                <p>Functions included in the project are:</p>
                                    <ul>
                                        <li>Mini Game</li>
                                        <li>Blog</li>
                                        <li>Exercise section</li>
                                        <li>Competitive programing</li>
                                    </ul>   

                                <p>These functions were included because they are sections in which I know I can share the knowledge I have acquired.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>Thought process</h1>
                                <p>One of the main complications I had was to put the same display format for the blog sections, exercises and the competitive programming, this using the react porps, as well as a small internal database using arrays.</p>
                            </div>
                        </div>
                        <div className="sectimg sect">
                            <img alt="" src={py3}></img>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="sectimg sect">
                            <img alt="" src={py4}></img>
                        </div>
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>Lessons learned</h1>
                                <p>It is clear that we are not always going to have the knowledge required to carry out all the tasks that are needed, as well as the ideal is to work on it so that the knowledge is acquired, it is also important to do everything that is possible with what is has. Without a doubt, one of my next challenges is to connect the databases to the websites that I build, since without a doubt the way in which I solve part of the backend with arrays for this expanding project and the ones that follow will not be optimal.</p>
                            </div>
                        </div>
                    </div>

                    {/* know more about other projects section */}
                    {/* <div className="cont lastcont">
                        <div className="secttitle sect lastsect">
                            <div className="lastsectext">
                                <h1>Know more about other projects</h1>
                                <img alt="" src={py1}></img>
                                <Link to={"../py"}><button>See more</button></Link>
                            </div>
                        </div>
                    </div> */}
                </>
            }
        </div>
    )
}

export default ITA;