import "./HeroImg2Styles.css";
import React, { Component } from "react";

// this.porps.~ 사용하기 위해 class형 컴포넌트로 변경 -> 라이프사이클 활용을 위해서?
// 함수형 컴포넌트로는? 
// class HeroImg2 extends Component {
//   render() {
//     return (
//       <div className="hero-img">
//         <div className="heading">
//           <h1>{this.props.heading}</h1>
//           <p>{this.props.text}</p>
//         </div>
//       </div>
//     );
//   }
// }

// 함수형 컴포넌트로 만들어 봄
const HeroImg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
