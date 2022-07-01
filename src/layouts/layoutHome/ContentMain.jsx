import styled from "styled-components";
import {
  ArrowUp,
  FillColorIcon,
  HeartIcon,
  LightningIcon,
} from "../../components/svgs";
import { Content1, Content2, Content3 } from "./index";

const Feature = styled.div`
  .feature-list {
    display: flex;
    justify-content: center;
    width: var(--w-1100);
    margin: 64px auto 90px auto;
    .flex {
      display: flex;
      &:not(:first-child) {
        margin-left: 64px;
      }
      h4 {
        --tw-space-x-reverse: 0;
        margin-right: calc(8px * var(--tw-space-x-reverse));
        margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
        font-size: 1.6rem;
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
          <div className="flex">
            <HeartIcon />
            <h4 className="feature-text">Free forever</h4>
          </div>
          <div className="flex">
            <FillColorIcon />
            <h4 className="feature-text">15+ themes</h4>
          </div>
          <div className="flex">
            <ArrowUp />
            <h4 className="feature-text">Visitor stats</h4>
          </div>
          <div className="flex">
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
