import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import { sliderItems } from "./../data.js";

const Container = styled.div`
  width: 100%; /*to full extent */
  height: 100vh;
  display: flex;
  position: relative; /* position parent to position arrow */
  overflow: hidden; /*to make the slides overflow fr sliding behaviour */
  ${mobile({ display: "none" })} /*mobile responsive (check responsive.js file) */
`;

const Wrapper = styled.div` /*wrapper to contain our slides and its slifding transitions */
  height: 100%;
  display: flex;
  transition: all 1.5s ease ;
  transform: translateX(${props=>props.slideIndex*-100}vw); /*move slider to the x axis */
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgrey;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; /* position children from parent "Container" to position arrows */
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; /*using props, we bought left arrow to the left */
  right: ${(props) =>
    props.direction === "right" &&
    "10px"}; /*using props, we bought right arrow to the right */
  margin: auto; /* to bring the arrow to the center of the slider container */
  cursor: pointer;
  opacity: 0.5;
  z-index:10;
`;

const Slides = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg}; /*background color props */
`;
const ImgContainer = styled.div`
  height: 100%; /* from the base parent "SLides" */
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0); /*initial value to zero using useSate hooks */

  const handleClick = (direction) => { /*handle click for slider function */
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
          <Slides bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slides>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
