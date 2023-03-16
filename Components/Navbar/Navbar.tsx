import Imdb from "@/assets/imdb";
import ImdbPro from "@/assets/ImdbPro";
import SearchIcon from "@/assets/SearchIcon";
import ThreeLIneMenu from "@/assets/ThreeLIneMenu";
import WatchListIcon from "@/assets/WatchListIcon";
import { Typography, VerticalDash } from "@/pages/movie-detail/[MID]";
import React from "react";
import styled from "styled-components";
import { Container } from "../common/common";
import SelectInput from "../SelectInput/SelectInput";

const opts = [
  { label: "EN", value: "en" },
  { label: "ar", value: "ar" },
];
const opts2 = [
  { label: "All", value: "All" },
  { label: "ar", value: "ar" },
];
const Navbar = () => {
  const handleLangChange = () => {};
  return (
    <NavBarContainer>
      <ContentContainer>
        <Container>
          <Imdb />
          <Container>
            <ThreeLIneMenu />
            <Typography>Menu</Typography>
          </Container>
        </Container>
        <SearchInputContainer>
          <SelectInputContainer>
            <SelectInput
              textColor="black"
              backGroundColor="white"
              options={opts2}
              onChange={handleLangChange}
              borderRadius={"6px 0px 0px 6px"}
            />
          </SelectInputContainer>
          <SearchInput placeholder="Search IMDB" />
          <IconContainer>
            <SearchIcon />
          </IconContainer>
        </SearchInputContainer>

        <WatchListContainer>
          <ImdbPro />
          <VerticalDash />
          <Container>
            <WatchListIcon />
            <Typography>WatchList</Typography>
          </Container>
        </WatchListContainer>
        <Container>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <Button>
            <Typography>Sign In </Typography>
          </Button>
          <div style={{ width: "58px" }}>
            <SelectInput options={opts} onChange={handleLangChange} />
          </div>
        </Container>
      </ContentContainer>
    </NavBarContainer>
  );
};

export default Navbar;
const WatchListContainer = styled.div`
  display: none;

  @media only screen and (min-width: 1210px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const SearchInputContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1110px) {
    display: none;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  @media only screen and (max-width: 1110px) {
    display: none;
  }
`;
const Button = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const NavBarContainer = styled.nav`
  font-size: 18px;
  background-color: black;
  max-width: 100vw;
  height: 65px;

  /* max-width: 1180px; */
`;
const ContentContainer = styled.div`
  max-width: 1185px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  gap: 0px 20px;
  justify-content: space-around;
  padding-inline: 150px;
  @media only screen and (max-width: 800px) {
    padding-inline: 30px;
  }
`;
const SearchInput = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 95%;
  border: none;
  color: black;
  background-color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 0px 10px 10px 0px;
  height: 25px;
  padding: 10px 0px 10px 10px;
  border-left: 2px solid lightgray;
  ::placeholder {
    color: #a49f9f !important;
  }

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
const SearchIconContainer = styled.div`
  display: none;
  @media only screen and (max-width: 1110px) {
    display: Block;
  }
`;
const SelectInputContainer = styled.div`
  display: none;
  width: 80px;
  @media only screen and (min-width: 1110px) {
    display: Block;
  }
`;
