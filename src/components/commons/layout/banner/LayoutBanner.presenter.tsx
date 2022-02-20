import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LayoutBannerPresenter = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/main/slide01.jpg" />
        </div>
        <div>
          <SliderItem src="/images/main/slide02.jpg" />
        </div>
        <div>
          <SliderItem src="/images/main/slide03.jpg" />
        </div>
        <div>
          <SliderItem src="/images/main/slide04.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}

export default LayoutBannerPresenter