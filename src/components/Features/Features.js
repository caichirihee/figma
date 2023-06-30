import "./features.css";
import arrowImage from "../../assets/images/arrow.png";
import pancake from "../../assets/images/pancake.png";
import trustswap from "../../assets/images/trustswap.png";
import uniswap from "../../assets/images/uniswap.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Features() {
  return (
    <div className="features-section">
      <img src={arrowImage} alt="arrow-img" className="arrow-img" />
      <div className="partner">
        <div className="partner-frame">
          <div className="frame">
            <div className="frame-heading">
              <h3 className="heading">OUR PARTNERS</h3>
            </div>
          </div>
        </div>
        <div className="partner-frame1088">
          <div className="control-left">
            <div className="control-frame-left">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="fa-arrow-left-icon"
              />
            </div>
          </div>
          <div className="partner-list">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={4}
              speed={2000}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".control-left",
                nextEl: ".control-right",

                clickable: true,
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <PartnerCard img={trustswap} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={pancake} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={uniswap} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={pancake} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={trustswap} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={pancake} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={uniswap} />
              </SwiperSlide>
              <SwiperSlide>
                <PartnerCard img={pancake} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="control-right">
            <div className="control-frame-right">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="fa-arrow-right-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

const PartnerCard = ({ img }) => {
  return (
    <div className="partner-card">
      <div className="img-wrapper">
        <img src={img} alt="partner-img" className="card-img" />
      </div>
    </div>
  );
};
