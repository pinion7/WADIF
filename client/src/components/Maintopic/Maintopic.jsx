import React from "react";
import styled from "styled-components";
import { Man } from "styled-icons/icomoon";
import { Like } from "@styled-icons/boxicons-regular";
import { Bookmark2 } from "styled-icons/remix-fill";
import { Sun } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

const TopicContainer = styled.div`
  width: 100%;
  height: 20em;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 1em;
`;

const BodyContainer = styled.div`
  border-top: 1px solid black;
  padding-top: 1.5em;
  height: 80%;
  display: flex;
  position: relative;
`;

const LeftContainer = styled.div`
  flex: 2;
  background-color: ${(props) => props.bgColor || "royalblue"};
  border-radius: 10px;
  margin: 0 0em 1em 0;
  position: relative;
`;

const LeftSun = styled(Sun)`
  position: absolute;
  width: 2.5em;
  right: 0.5em;
  top: 0.5em;
  color: #000000;
`;

const RightContainer = styled.div`
  flex: 9;
  margin: 0 0em 1em 0;
  /* padding-right: 2em; */
`;

const RightTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4em;
  padding-bottom: 0.5em;
`;

const HeadTitle = styled.h1`
  font-size: 1.7em;
`;

const BookMark = styled(Bookmark2)`
  width: 1em;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: #aa0000;
    transition: 0.4s;
  }
  &:active {
    color: red;
  }
`;

const RightBottomContainer = styled.div`
  padding: 1.5em;
  padding-top: 0;
  line-height: 1.5em;
  cursor: pointer;
  a {
    color: black;
    text-decoration: none;
  }
`;

const BottomContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 3em;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomLeftContainer = styled.div`
  /* background-color: black; */
  display: flex;
  align-items: center;
`;

const BottomLeftCircle = styled.div`
  width: 35px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
  /* border-color: #cf8f18; */
`;

const BottomLeftIcon = styled(Man)`
  position: absolute;
  top: 0.5em;
  left: -6px;
  width: 3em;
  color: #7a602f;
`;

const BottomLeftName = styled.span`
  margin-left: 1em;
  font-size: 1.2em;
  color: #2952ca;
`;

const BottomRightContainer = styled.div``;

const BottomRightLike = styled(Like)`
  width: 1.5em;
  margin-right: 1em;
`;

const BottomRightNum = styled.span`
  margin-right: 1em;
  color: red;
  font-weight: 700;
`;

const Maintopic = ({ bgColor }) => {
  return (
    <TopicContainer>
      <BodyContainer>
        <LeftContainer bgColor={bgColor}>
          <LeftSun />
        </LeftContainer>
        <RightContainer>
          <RightTopContainer>
            <HeadTitle>모래뿐일 것이다.</HeadTitle>
            <BookMark />
          </RightTopContainer>
          <RightBottomContainer>
            <Link to="/mypage">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              vero sint labore a, alias tempora quas quisquam, inventore dolores
              quod eius facere, voluptatibus dolorum ratione distinctio! Earum
              inventore nemo alias.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Minus vero sint labore a, alias tempora quas
              quisquam, inventore dolores quod eius facere, voluptatibus dolorum
              ratione distinctio! Earum inventore nemo alias.
            </Link>
          </RightBottomContainer>
        </RightContainer>
      </BodyContainer>
      <BottomContainer>
        <BottomLeftContainer>
          <BottomLeftCircle>
            <BottomLeftIcon />
          </BottomLeftCircle>
          <BottomLeftName>김우석</BottomLeftName>
        </BottomLeftContainer>
        <BottomRightContainer>
          <BottomRightLike />
          <BottomRightNum>1234</BottomRightNum>
        </BottomRightContainer>
      </BottomContainer>
    </TopicContainer>
  );
};

export default Maintopic;
