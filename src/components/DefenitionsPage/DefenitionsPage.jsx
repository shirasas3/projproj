import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import DefCircle from "../../assets/DefCircle.png";
import cardsData from "../../card.js";

import "swiper/css";
import "swiper/css/navigation";
import "../DefenitionsPage/DefenitionsPage.css";
import DefenitionCard from "../DefenitionsCard/DefenitionsCard";

const DefenitionsPage = ({ setIsDefenitions }) => {
  const swiperRef = useRef(null);
  const [cards, setCards] = useState(cardsData);

  const rotateNext = () => {
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const rotatePrev = () => {
    setCards((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, -1)];
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();     // recalc layout for new slide order
      swiperRef.current.slideTo(1, 0); // snap to index 1 (middle) instantly, no animation
    }
  }, [cards]);

  return (
    <div className="definition-page">
      <section className="definition-carousel">
        <Swiper
          modules={[Navigation]}
          dir="ltr"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          centeredSlides
          spaceBetween={40}
          speed={500}
          className="definition-carousel__swiper"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            761: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.Key}>
              <DefenitionCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="definition-carousel__arrow definition-carousel__prev"
          aria-label="Previous definition"
          onClick={rotatePrev}
        />

        <button
          type="button"
          className="definition-carousel__arrow definition-carousel__next"
          aria-label="Next definition"
          onClick={rotateNext}
        />
      </section>

      <img src={DefCircle} className="DefCircle" />
      <button className="back-btn">
        <span className="defBtnback-btn-text" onClick={() => setIsDefenitions(false)}>
          BACK TO LOMDA
        </span>
      </button>
    </div>
  );
};

export default DefenitionsPage;