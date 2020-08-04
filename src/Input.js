import React, { useRef } from "react";

const input = {
  width: "400px",
  height: "30px",
  margin: "10px 0",
  display: "inline-block",
};

const submit = {
  width: "70px",
  height: "40px",
  borderRadius: "5px",
  marginLeft: "10px",
  display: "inline-block",
  background: "#ccc",
  fontSize: "15px",
};

const Input = () => {
  const write = useRef();
  return (
    <div className="input">
      <input ref={write} placeholder="댓글을 작성해보세요" style={input} />
      <button style={submit}>등록</button>
    </div>
  );
};

export default Input;
