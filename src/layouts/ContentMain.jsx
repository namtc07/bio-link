import styled from "styled-components";
import {
  ArrowUp,
  FillColorIcon,
  HeartIcon,
  LightningIcon,
} from "../components/svgs";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

const Feature = styled.div`
  .feature-list {
    display: flex;
    justify-content: center;
    width: 1100px;
    margin: auto;
    margin-top: 64px;
    margin-bottom: 90px;
    .flex {
      display: flex;
      &:not(:first-child) {
        margin-left: 64px;
      }
      h4 {
        --tw-space-x-reverse: 0;
        margin-right: calc(8px * var(--tw-space-x-reverse));
        margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

function ContentMain() {
  return (
    <>
      <Content1 />
      <Feature className="feature">
        <div className="feature-list">
          <div className="flex space-x-8">
            <HeartIcon />
            <h4 className="feature-text">Free forever</h4>
          </div>
          <div className="flex space-x-8">
            <FillColorIcon />
            <h4 className="feature-text">15+ themes</h4>
          </div>
          <div className="flex space-x-8">
            <ArrowUp />
            <h4 className="feature-text">Visitor stats</h4>
          </div>
          <div className="flex space-x-8">
            <LightningIcon />
            <h4 className="feature-text">Lightning fast (100ms)</h4>
          </div>
        </div>
      </Feature>
      <Content2 />
      <Content3 />
    </>
  );
}

export default ContentMain;
