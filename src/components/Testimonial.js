import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Możesz zmienić na 2 lub 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="testimonial">
      <h1 className="title-testimonial">Testimonials</h1>
      <Slider {...settings}>
        <div className="testimonial-item">
            <div className="image-wrapper">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Anna"
          className="testimonial-image"
        />
      </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Bardzo dobre jedzenie!"</p>
          <p>- Anna</p>
        </div>
        <div className="testimonial-item">
          <div className="image-wrapper">
        <img
          src="https://randomuser.me/api/portraits/men/20.jpg"
          alt="Michal"
          className="testimonial-image"
        />
      </div>
          <p>⭐⭐⭐⭐</p>
          <p>"Obsługa na wysokim poziomie."</p>
          <p>- Michał</p>
        </div>
        <div className="testimonial-item">
          <div className="image-wrapper">
        <img
          src="https://randomuser.me/api/portraits/women/10.jpg"
          alt="Anna"
          className="testimonial-image"
        />
      </div>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Wrócę tu na pewno!"</p>
          <p>- Julia</p>
        </div>
      </Slider>
    </section>
  );
}

export default Testimonial;
