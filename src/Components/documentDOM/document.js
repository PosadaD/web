import "./document.css"

// import Datablog from "../../Data/Blog/BlogData"
// import Dataex from "../../Data/Exercise/ExercisesData"

import {Blog1React} from "../../Data/Blog/BlogContent"
import {Ex1React, Ex2React} from "../../Data/Exercise/ExcerciseContent"
import { Comp1, Comp2, Comp3, Comp4, Comp5 } from "../../Data/Competitive/Competitivecontent"

import SliderSEction from "./component/slider"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Mousewheel} from "swiper";

function Document(props){


    var images = require(`../../${props.imgData}/${props.image}`)

    var Data = props.data

    const dataDisplaySection = Object.values(Data).map(item => {

        return(
            <SwiperSlide key={item.id}>
                <SliderSEction  
                    item={item}
                    imgData = {props.imgData}
                />

            </SwiperSlide>
        )
    })

    function renderswitch(param)
    {
        switch(param){
            case "blog1":
                return <Blog1React/>
            case "blog2":
                return <h2>blog 2</h2>
            default:
                return ""
        }   
    }

    function renderswitchEx(param)
    {
        switch(param){
            case "ex1":
                return <Ex1React/>
            case "ex2":
                return <Ex2React/>
        }
    }

    function renderswitchComp(param)
    {
        switch(param){
            case "comp1":
                return <Comp1/>
            case "comp2":
                return <Comp2/>
            case "comp3":
                return <Comp3/>
            case "comp4":
                return <Comp4/>
            case "comp5":
                return <Comp5/>
        }
    }

    return(
        <section className="documentSection">
            <div className="frontPage">
                <img src={images} alt=""></img>
            </div>
            <div className="mainContent">
                <div className="Textcontent">
                    <h1>{props.mainTitle}</h1>
                    <div>{renderswitch(props.keys)}</div>
                    <div>{renderswitchEx(props.keys)}</div>
                    <div>{renderswitchComp(props.keys)}</div>
                </div>
            </div>    
            <div className="sliderBar-Container">
                <Swiper slidesPerView={3} spaceBetween={30} mousewheel={true} pagination={{clickable: true,}} modules={[Pagination, Mousewheel]} className="mySwiper">
                    {dataDisplaySection}
                </Swiper>
            </div>     
        </section>
    )
}

export default Document;