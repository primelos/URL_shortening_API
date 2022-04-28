import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const initialState = "";
const Search = () => {
  const [search, setSearch] = useState(initialState);

  const handleSend = (e) => {
    e.preventDefault();
    alert(search.url);
    setSearch(initialState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setSearch({ ...search, [name]: e.target.value });
  };
  console.log("search", search);
  return (
    <SearchContainer>
      <SearchWrapper onSubmit={handleSend}>
        <label style={{ width: "100%" }}>
          <SearchInputWrapper>
            <SearchInput
              onChange={handleChange}
              name="url"
              placeholder="Shorten a link here..."
            />
            <button type="submit">Shorten It!</button>
          </SearchInputWrapper>
          Please add a link
        </label>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  position: absolute;
  top: 700px;
  background-image: url("/images/bg-shorten-desktop.svg");
  /* z-index: 100; */
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3a3054;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.form`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex: 1;
  border: none;

  &:focus {
    outline: none;
    border: 2px solid #e45b0b;
    ::placeholder {
      color: #e45b0b;
    }
  }
`;
