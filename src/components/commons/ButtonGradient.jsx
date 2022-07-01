import { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

const ButtonAnt = styled(Button)`
  margin-top: 24px;
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  line-height: 17px;
  letter-spacing: 2px;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-size: 14px;
  font-weight: 700;
  background: linear-gradient(112.44deg, #ff5858 2.09%, #c058ff 75.22%);
  background-size: 165%;
  transition: 0.25s ease-in-out;
  min-width: 96px;
  height: 40px;
  border-color: transparent;
  &:hover {
    background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
    background-size: 165%;
    animation-name: bg-anim;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    border-color: transparent;
    color: white;
  }
  @keyframes bg-anim {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

function ButtonGradient({ title }) {
  const [loadings, setLoadings] = useState([]);

  return (
    <ButtonAnt loading={loadings[0]} onClick={() => enterLoading(0)}>
      {title}
    </ButtonAnt>
  );
}

export default ButtonGradient;
