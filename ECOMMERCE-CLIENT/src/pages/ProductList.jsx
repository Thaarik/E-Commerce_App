import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    width: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}/*mobile responsive (check responsive.js file) */
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0",
  })}/*mobile responsive (check responsive.js file) */
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0px",
  })}/*mobile responsive (check responsive.js file) */
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]) - this gives you the category using router location
  const cat = location.pathname.split("/")[2]
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("newest"); //initial value is newest

  const handleFilters = (event)=>{
    const value = event.target.value;
    setFilters({
      ...filters, //adds previous updated filter value in useState hooks
      [event.target.name]:value,
    })
  }
  console.log(filters)
  console.log(sort)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}> {/*when we make any changes in color filter, the handleFilte in onChange event registers in event.target.name="color" and event.target.value = value */}
            <Option disabled >
              Color
            </Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}> {/*when we make any changes in color filter, the handleFilte in onChange event registers in event.target.name="size" and event.target.value = value */}
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={event=>setSort(event.target.value)}> {/*sort filter with onchange event*/}
            <Option value="newest">Newest</Option>
            <Option value="asc">Low to High Price</Option>
            <Option value="desc">High to low Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/> {/**sending category, filter and sort values as props to products */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
