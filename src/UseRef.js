import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const colorChange = useRef();

  //   useEffect(() => {}); // 무조건 실행됨 (함수가 들어감), 화면이 변하거나, 업데이트 될때, 맨 처음 화면일때
  useEffect(() => {
    colorChange.current.style = "background:yellow;";
  }, []); // 최초에 실행하고 싶으면 [] 넣기

  return (
    <div>
      <input ref={colorChange} />
    </div>
  );
};

export default UseRef;
