import React, { useState, useEffect, useRef } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import styled from "styled-components";
import Input from "./Input";

const Comment = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const Like = styled.button`
  &:active,
  &:focus {
    border: 1px solid #fff;
  }
`;

// const like = useRef();
// useEffect(() => {
//   like.current.style = "background:yellow;";
// }, []); // 최초에 실행하고 싶으면 [] 넣기

// useEffect(() => {
//   console.log("나 렌더됨");
// }, []); // 최초에 실행하고 싶으면 [] 넣기

const Detail = () => {
  const [num, setNum] = useState(0);
  const [icon, setIcon] = useState(<FcLikePlaceholder />);

  const onColor = () => {
    setIcon(() => <FcLike />);
  };

  const onIncrease = () => {
    setNum((prevNum) => prevNum + 1);
  };

  return (
    <>
      <Like
        // ref={like}
        onClick={() => {
          onIncrease();
          onColor();
        }}
        className="like"
        style={{ fontSize: "60px" }}
      >
        {icon}
      </Like>
      <Input></Input>
      <span>
        <h5>좋아요</h5>
        <span style={{ paddingRight: "10px" }}>{num}</span>
      </span>
      <span
        style={{
          color: "#b5b5b5",
          fontSize: "15px",
          verticalAlign: "text-top",
        }}
      >
        |
      </span>
      <span style={{ paddingLeft: "10px" }}>
        <h5>댓글수</h5>
        <span>2</span>
      </span>
      <br />
      <Comment>안녕!</Comment>
      <Comment>반가워!</Comment>
    </>
  );
};

export default Detail;
