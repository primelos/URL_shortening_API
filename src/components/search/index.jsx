import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import ButtonLink from "../buttonLink/ButtonLink";
import { v4 as uuidv4 } from "uuid";
import AdvancedStatistics from "../advanceStatistics";

const Search = () => {
  const useLocalStorage = () => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem("saved");
        return item ? JSON.parse(item) : [];
      } catch (error) {
        console.log("error", error);
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem("saved", JSON.stringify(valueToStore));
      } catch (error) {
        console.log("error", error);
      }
    };
    return [storedValue, setValue];
  };

  const [search, setSearch] = useState({ urlName: "" });
  const [urlData, setUrlData] = useState("");
  const [shortenUrl, setShortenUrl] = useLocalStorage([]);
  const [copyState, setCopyState] = useState(false);
  const [error, setError] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    setUrlData(search.urlName);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    switch (name) {
      case "urlName":
        e.target.value < 1 ? setError("Please add a link") : setError("");
        break;
      default:
        break;
    }
    setSearch({ urlName: e.target.value });
  };

  const handleCopy = async (e) => {
    let copyLink = await navigator.clipboard.writeText(e.urlShort);
    setShortenUrl(
      shortenUrl.map((item) =>
        item.id === e.id ? { ...item, copyBool: true } : item
      )
    );
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
            copyBool: false,
          },
        ]);
        setSearch({ urlName: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [urlData]);

  return (
    <>
      <SearchContainer>
        <SearchWrapper onSubmit={handleSend}>
          {/* <label style={{ width: "100%" }}> */}
          <SearchInputWrapper>
            <SearchStyle>
              <SearchInput
                value={search.urlName}
                onChange={handleChange}
                name="urlName"
                placeholder="Shorten a link here..."
              />
              {error.length > 0 && (
                <SpanWrapper className="error">{error}</SpanWrapper>
              )}
            </SearchStyle>
            <ButtonLink type="submit" text="Shorten It!" />
          </SearchInputWrapper>
          {/* </label> */}
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
  @media screen and (max-width: 1250px) {
    top: 750px;
    width: 90%;
    margin: 0 auto;
    left: 20px;
  }
  @media screen and (max-width: 1040px) {
    top: 850px;
    width: 90%;
    margin: 0 auto;
    left: 20px;
  }
  @media screen and (max-width: 850px) {
    top: 990px;
    width: 90%;
    margin: 0 auto;
    left: 20px;
  }
  @media screen and (max-width: 450px) {
    top: 801px;
    width: 90%;
    margin: 0 auto;
    left: 20px;
  }
`;

const SearchWrapper = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const SearchStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const SpanWrapper = styled.span`
  width: 96%;
  color: #e45b0b;
  z-index: 1;
  position: absolute;
  top: 48px;
  @media screen and (max-width: 450px) {
    top: 44px;
  }
`;

const SearchInput = styled.input`
  padding: 11px 15px;
  border-radius: 5px;
  display: flex;
  flex: 1;
  border: none;
  font-size: 15px;
  width: 95%;
  /* position: absolute; */

  &:focus {
    outline: none;
    border: 2px solid #e45b0b;
    ::placeholder {
      color: #e45b0b;
    }
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    margin-bottom: 40px;
  }
`;
