import "./Examples&Ex.css"
import ExampleSection from "./containers/exexSection"
import DataExamp from "../../Data/Exercise/ExercisesData"
import {FaSearch} from "react-icons/fa"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination, Mousewheel} from "swiper";


function ExamplesEx(){
    const exData = DataExamp.data.exex
    const exSection = exData.map(item => {
        return(
            <SwiperSlide key={item.id}>
                <ExampleSection  
                    item={item}
                />
            </SwiperSlide>
        )
    })


    return(
        <>
            <div className="seachContainerEx">
                <div className="opacity">
                    <input type="text" placeholder="  Search..."></input>
                    <button><FaSearch /></button>
                </div>
            </div>
            <div className="container tituloSection">
                <h3>Examples & Excercises</h3>
            </div>
            <Swiper slidesPerView={3} spaceBetween={30} mousewheel={true} pagination={{clickable: true,}} modules={[Pagination, Mousewheel]} className="mySwiper">
                {exSection}
            </Swiper>
        </>
    )
}

export default ExamplesEx;