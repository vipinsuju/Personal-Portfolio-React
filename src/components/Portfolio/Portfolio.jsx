import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/resto.png";
import Ecommerce from "../../img/sale.png";
import HOC from "../../img/quiz2.png";
import MusicApp from "../../img/crypto.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://restaurant-app-vipin.netlify.app/" >
            <img src={Sidebar} alt="" />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://shopping-cart-react-vipin.netlify.app/" >
            <img src={Ecommerce} alt="" />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://silly-franklin-86acca.netlify.app/" >
            <img src={MusicApp} alt="" />
          </a>

        </SwiperSlide>
        <SwiperSlide>
          <a href="https://vipin-quiz-app2.netlify.app/" >
            <img src={HOC} alt="" />
          </a>

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
