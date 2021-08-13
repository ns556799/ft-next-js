import Link from 'next/link';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { device } from '~/config/utils';

import HexArrow from '../assets/relatedArrow.svg';
import HexIcon from '../assets/relatedIcon.svg';
import HexSvg from './HexSvg';
import HexOutlineSvg from './HexOutlineSvg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const RelatedContainer = styled.div`
  width: 100%;
  padding: 70px 20px 30px 20px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;

const RelatedSwiper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

const RelatedSlide = styled.div`
  position: relative;
  overflow: hidden;

  a {
    position: absolute;
    height: 100%;
    width: 100%;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      right: 0;
      background-color: rgb(248 151 18);
      opacity: 0;
      z-index: 1;
      transition: opacity 0.5s ease-in;
    }
  }

  &:after {
    content: '';
    display: block;
    padding-bottom: 120%;
  }

  &:hover {
    a {
      &:before {
        opacity: 0.7;
        transition: opacity 0.5s ease-in;
      }
    }
    .relatedTitle {
      bottom: 50%;
      opacity: 1;
      transition: opacity 0.5s ease-in,
        bottom 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
    }
    .relatedDesc {
    }
    .relatedCta {
      transform: translate(50%, -100%);
      opacity: 1;
      transition: opacity 0.5s ease-in,
        transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
    }
  }
`;

const RelatedSlideImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
  object-position: center center;
`;

const RelatedSlideTitle = styled.div`
  position: absolute;
  bottom: 14%;
  color: white;
  width: 75%;
  text-align: center;
  right: 50%;
  transform: translate(50%, 0px);
  z-index: 3;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  transition: opacity 0.5s ease-in, bottom 0.5s cubic-bezier(0.2, 0.8, 0.2, 0.8);
`;
const RelatedSlideDesc = styled.div`
  position: absolute;
  bottom: 5%;
  color: white;
  width: 75%;
  text-align: center;
  right: 50%;
  transform: translate(50%, 0px);
  z-index: 2;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 700;
  opacity: 0;
`;

const SwiperPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  .swiper-pagination-bullet {
    height: 10px;
    width: 35px;
    border-radius: 10px;
    margin: 0 5px;
    background-color: #f8971d;
    opacity: 0.8;
    transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .swiper-pagination-bullet-active {
    background-color: #009b3a;
    width: 55px;
    transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const RelatedIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 50px;
  height: 50px;
  transform: translate(0%, -50%);

  @media ${device.tablet} {
    bottom: -20px;
    top: initial;
    right: 50%;
    transform: translate(50%, 50%);
    z-index: 5;
    opacity: 0;
  }
`;
const RelatedIconHex = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
const RelatedIconArrow = styled.img`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: 50%;
  transform: translate(50%, -50%);
`;

const RelatedTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #404545;
  text-align: center;
  line-height: 1;
  margin-bottom: 50px;
  letter-spacing: 1px;

  @media ${device.tablet} {
    font-size: 40px;
  }
`;
const RelatedSubtitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #009b3a;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const RelatedHexContainer = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  svg {
    width: 50px;
    height: 50px;

    @media ${device.tablet} {
      width: initial;
      height: initial;
    }
  }

  .card {
    position: absolute;

    &.hex-1 {
      top: 15%;
      left: -30%;

      @media ${device.tablet} {
        top: initial;
        left: initial;
      }
    }

    &.hex-2 {
      top: 33%;
      left: 0%;

      @media ${device.tablet} {
        top: 43%;
        left: 11%;
      }

      svg {
        opacity: 0.5;
      }
    }

    &.hex-3 {
      top: 70%;
      left: 6%;

      svg {
        opacity: 0.5;
      }
    }

    &.hex-4 {
      top: 50%;
      left: 4%;

      svg {
        opacity: 1;
      }
    }

    &.hex-5 {
      top: 80%;
      left: -3%;

      svg {
        opacity: 0.5;
      }
    }

    &.hex-6 {
      top: 70%;
      left: 0%;

      svg {
        opacity: 1;
      }
    }

    &.hex-7 {
      top: 20%;
      right: -15%;

      @media ${device.tablet} {
        top: 10%;
        right: 15%;
      }

      svg {
        opacity: 1;
      }
    }

    &.hex-8 {
      top: 40%;
      right: 10%;

      @media ${device.tablet} {
        top: 50%;
        right: 20%;
      }

      svg {
        opacity: 1;
      }
    }

    &.hex-9 {
      top: 50%;
      right: 15%;

      svg {
        opacity: 1;
      }
    }

    &.hex-10 {
      top: 100%;
      right: 8%;

      @media ${device.tablet} {
        top: 65%;
      }

      svg {
        opacity: 0.5;
      }
    }

    &.hex-11 {
      display: none;

      @media ${device.tablet} {
        top: 70%;
        right: 15%;
      }

      svg {
        opacity: 0.6;
      }
    }
  }
`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const Related = ({ data }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 200, tension: 550, friction: 140 },
  }));

  return (
    <RelatedContainer
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <RelatedHexContainer>
        <animated.div
          className="card hex-1"
          style={{ transform: props.xy.to(trans1) }}
        >
          <HexSvg
            width="240px"
            height="240px"
            fill="#e4e4e4"
            className="svg1"
          />
        </animated.div>
        <animated.div
          className="card hex-2"
          style={{ transform: props.xy.to(trans2) }}
        >
          <HexSvg
            width="120px"
            height="120px"
            fill="#e4e4e4"
            className="svg2"
          />
        </animated.div>

        <animated.div
          className="card hex-3"
          style={{ transform: props.xy.to(trans1) }}
        >
          <HexOutlineSvg height="200px" width="200px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-4"
          style={{ transform: props.xy.to(trans1) }}
        >
          <HexOutlineSvg height="150px" width="150px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-5"
          style={{ transform: props.xy.to(trans2) }}
        >
          <HexSvg
            width="120px"
            height="120px"
            fill="#e4e4e4"
            className="svg2"
          />
        </animated.div>

        <animated.div
          className="card hex-6"
          style={{ transform: props.xy.to(trans4) }}
        >
          <HexSvg height="70px" width="70px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-7"
          style={{ transform: props.xy.to(trans4) }}
        >
          <HexSvg height="150px" width="150px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-8"
          style={{ transform: props.xy.to(trans2) }}
        >
          <HexOutlineSvg height="100px" width="100px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-9"
          style={{ transform: props.xy.to(trans4) }}
        >
          <HexOutlineSvg height="200px" width="200px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-10"
          style={{ transform: props.xy.to(trans2) }}
        >
          <HexSvg height="250px" width="250px" fill="#e4e4e4" />
        </animated.div>

        <animated.div
          className="card hex-11"
          style={{ transform: props.xy.to(trans1) }}
        >
          <HexSvg height="150px" width="150px" fill="#e4e4e4" />
        </animated.div>
      </RelatedHexContainer>
      <RelatedSubtitle>The Evolution of Growth</RelatedSubtitle>
      <RelatedTitle>Related Content</RelatedTitle>
      <RelatedSwiper>
        <Swiper
          spaceBetween={10}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            960: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {data.map((slide, i) => (
            <SwiperSlide key={i}>
              <RelatedSlide>
                <Link href={`/article/${slide.id}`}>
                  <a>
                    <RelatedSlideImage src={slide.articleImage} />
                    <RelatedSlideTitle className="relatedTitle">
                      {slide.title}
                    </RelatedSlideTitle>
                    <RelatedSlideDesc className="relatedDesc">
                      {slide.desc}
                    </RelatedSlideDesc>
                    <RelatedIconContainer className="relatedCta">
                      <RelatedIconArrow src={HexArrow.src} />
                      <RelatedIconHex src={HexIcon.src} />
                    </RelatedIconContainer>
                  </a>
                </Link>
              </RelatedSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </RelatedSwiper>
      <SwiperPagination>
        <div className="swiper-pagination"></div>
      </SwiperPagination>
    </RelatedContainer>
  );
};

export default Related;
