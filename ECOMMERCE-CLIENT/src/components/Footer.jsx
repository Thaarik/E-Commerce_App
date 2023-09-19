import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })} /*mobile responsive (check responsive.js file) */
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })} /*mobile responsive (check responsive.js file) */
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ backgroundColor: "#eee" })} /*mobile responsive (check responsive.js file) */
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMM</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>HOME</ListItem>
          <ListItem>CART</ListItem>
          <ListItem>MEN FASHION</ListItem>
          <ListItem>WOMEN FASHION</ListItem>
          <ListItem>ACCESSORIES</ListItem>
          <ListItem>MY ACCOUNT</ListItem>
          <ListItem>ORDER TRACKING</ListItem>
          <ListItem>WISHLIST</ListItem>
          <ListItem>WISHLIST</ListItem>
          <ListItem>TERMS</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          ABC, Oxford Street, N18 57E
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
          +44-4564784901
        </ContactItem>
        <ContactItem>
          <Mail style={{marginRight:"10px"}}/>
          ecomm@hotmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
