import "./home.css"
import Loading from "./components/loadig";
import { useEffect, useRef, useState } from "react";


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
    var txt = "dieguillo el mas guapillo";
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

                        </div>
                    </div>
                    <div className="section project1">
                        section1
                    </div>
                    <div className="section project2">
                        section1
                    </div>
                    <div className="section contact">
                        section1
                    </div>   
                </div>
            }
        </>
    )
}


export default Home;