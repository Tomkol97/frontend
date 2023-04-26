import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Categories from "../components/Categories";

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
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  font-size: 15px;
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option`
  font-size: 15px;
`;
const Products = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Categories></Categories>
      <Title>{cat?.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>black</Option>
            <Option>yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price(desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Products;
