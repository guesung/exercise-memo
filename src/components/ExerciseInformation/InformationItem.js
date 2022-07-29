import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InformationItem = (props) => {
  return (
    <div className="InformationItem">
      <section className="chest">
        <div className="title">
          <div>{props.exercisePart}</div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          {props.exerciseType.map((exercise) => (
            <SwiperSlide key={exercise.id}>
              <a href={exercise.youtubeLink} target="_blank" rel="noreferrer">
                <img src={exercise.photoLink} />
                <span className="description">
                  <span>{exercise.exerciseName}</span>
                </span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default InformationItem;
