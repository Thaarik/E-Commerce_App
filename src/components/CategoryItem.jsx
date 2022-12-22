import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1; /*to set all category images in same size */
  margin: 3px;
  height: 70vh;
  position: relative; /*to set the info and button on top-center to the category image. SO this acts as parent */

`;
const Image = styled.img`
  width: 100%; /*to set all category images in same size */
  height: 100%;
  object-fit: cover;
  
  ${mobile({ height: "30vh" })} /*mobile responsive (check responsive.js file) */
`;
const Info = styled.div`
  position: absolute; /*to set the info and button on top-center to the category image. SO this acts as children */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  color: grey;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
