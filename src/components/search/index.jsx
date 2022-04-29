import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ButtonLink from "../buttonLink/ButtonLink";
import { v4 as uuidv4 } from "uuid";
import AdvancedStatistics from "../advanceStatistics";

const initialState = "";
const Search = () => {
  const [search, setSearch] = useState(initialState);
  const [urlData, setUrlData] = useState();
  const [shortenUrl, setShortenUrl] = useState([]);
  const [copyState, setCopyState] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setUrlData(search.urlName);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setSearch({ ...search, [name]: e.target.value });
  };

  const handleCopy = async (e) => {
    console.log("e", e);
    console.log("HEEREREREREREHERERERERE", shortenUrl);
    let a = await navigator.clipboard.writeText(e);
    console.log(a);
    setCopyState(!copyState);
  };

  useEffect(() => {
    if (!urlData) return;

    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${urlData}`)
      .then((res) => {
        setShortenUrl([
          ...shortenUrl,
          {
            id: uuidv4(),
            urlOld: search.urlName,
            urlShort: res.data.result.short_link2,
          },
        ]);
        // console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlData]);

  console.log("shortenUrl", shortenUrl);

  return (
    <>
      <SearchContainer>
        <SearchWrapper onSubmit={handleSend}>
          <label style={{ width: "100%" }}>
            <SearchInputWrapper>
              <SearchInput
                onChange={handleChange}
                name="urlName"
                placeholder="Shorten a link here..."
              />
              <ButtonLink type="submit" text="Shorten It!" />
            </SearchInputWrapper>
            Please add a link
          </label>
        </SearchWrapper>
      </SearchContainer>
      <AdvancedStatistics
        shortenUrl={shortenUrl}
        copyState={copyState}
        handleCopy={handleCopy}
      />
    </>
  );
};

export default Search;

const SearchContainer = styled.div`
  position: absolute;
  top: 650px;
  background-image: url("/images/bg-shorten-desktop.svg");
  z-index: 100;
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3a3054;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SearchWrapper = styled.form`
  /* position: relative; */
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
  padding: 11px 15px;
  border-radius: 5px;
  display: flex;
  flex: 1;
  border: none;
  font-size: 15px;

  &:focus {
    outline: none;
    border: 2px solid #e45b0b;
    ::placeholder {
      color: #e45b0b;
    }
  }
`;
