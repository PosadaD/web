import "./Generalstyle.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import nom1 from "../../homePage/img/nom1.png"
import nom2 from "../../homePage/img/nom2.png"
import nom3 from "../../homePage/img/nom3.png"
import nom4 from "../../homePage/img/nom4.png"
import nom5 from "../../homePage/img/nom5.png"
import py1 from "../../homePage/img/py1.png"
import Loading from "./components/loadig"


function ITA(){

    const [isLoading, setIsLoading] = useState(true);

    //Array of images to preload
    const images = [nom1, nom2, nom3, nom4, nom5];

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
                                <h1>NOM-001-SEDE-2012</h1>
                                <p>The project was initially made as an electrical engineer student request to create a platform which allows to have within reach documents useful for his studies, adding the plus their’ll be filtered. This was made from scratch and different functions have been added.</p>
                            </div>
                        </div>
                        <div className="sectimg sect">
                            <img alt="" src={nom1}></img>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="sectimg sect">
                            <img alt="" src={nom2}></img>
                        </div>
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>About ths project</h1>
                                <p>Functions included in the project are:</p>
                                    <ul>
                                        <li>Book search</li>
                                        <li>PDF preview</li>
                                        <li>Related articles</li>
                                    </ul>   

                                <p>This were selected to facilitate the looking for useful information to complete his tasks, meanwhile they can find it in a same place, saving time on the making.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>Thought process</h1>
                                <p>One of the complications that I had when making the website was to link the Google api with the site to add a function in which the students who required it could search for any book they wanted or needed, plus the information of the NOM-001.</p>
                            </div>
                        </div>
                        <div className="sectimg sect">
                            <img alt="" src={nom3}></img>
                        </div>
                    </div>
                    <div className="cont ">
                        <div className="sectimg sect">
                            <img alt="" src={nom5}></img>
                        </div>
                        <div className="secttitle sect">
                            <div className="text">
                                <h1>Lessons learned</h1>
                                <p>To made this project helped me to understand that, as developers, we should not only have to structure the projects as they are requested to us, giving that according to our knowledge and experience on the field, we can always contribute with something more to make the product even better, just as the case of the Google books api project that’s shown.</p>
                            </div>
                        </div>
                    </div>
                    <div className="cont lastcont">
                        <div className="secttitle sect lastsect">
                            <div className="lastsectext">
                                <h1>Know more about other projects</h1>
                                <img alt="" src={py1}></img>
                                <Link to={"../py"}><button>See more</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ITA;