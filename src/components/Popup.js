import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const PopupStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.8);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  .popup-inner {
    max-width: 350px;
    margin: auto;
    padding: 20px;
    background: #fff;
    overflow: auto;
    text-align: center;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .popup-inner::-webkit-scrollbar {
      display: none;
    }
    > * {
      margin-bottom: 20px;
    }
  }
`;

export default function Popup({ children, ...rest }) {
  React.useEffect(() => {
    gsap.from(".popup-inner", {
      scale: 0.3,
    });
  }, []);

  return (
    <>
      <PopupStyles {...rest}>
        <div className="popup-inner">{children}</div>
      </PopupStyles>
    </>
  );
}
