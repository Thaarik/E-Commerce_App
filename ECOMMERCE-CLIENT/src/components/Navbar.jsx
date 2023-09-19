import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })} /*mobile responsive (check responsive.js file) */
`;

const Wrapper = styled.div`
  /*to wrap the navbar contents inside container */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })} /*mobile responsive (check responsive.js file) */
`;

const Left = styled.div`
  flex: 1; /*to align the navbar content to the left */
  display: flex;
  align-items: center;
`;

const Lang = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })} /*mobile responsive (check responsive.js file) */
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none; /*to remove border */
  ${mobile({ width: "50px" })} /*mobile responsive (check responsive.js file) */
`;
const Center = styled.div`
  flex: 1; /*to align the navbar content to the center */
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })} /*mobile responsive (check responsive.js file) */
`;
const Right = styled.div`
  flex: 1; /*to align the navbar content to the right */
  display: flex;
  align-items: center; /*aligns register sign in cart to the center */
  justify-content: flex-end; /* sticks REGISTER SIGN IN CART to the right side of the navbar*/
  
  ${mobile({ flex:"2", justifyContent: "center" })} /*mobile responsive (check responsive.js file) */
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })} /*mobile responsive (check responsive.js file) */
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ECOMM</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              {" "}
              {/*from material icon */}
              <ShoppingCartOutlined color="action" /> {/*from material icon */}
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
