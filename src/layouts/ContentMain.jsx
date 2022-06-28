import { Input, Button } from "antd";
import styled from "styled-components";

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 25px;
  width: 840px;
  text-align: center;
  padding: 16px 24px;
  .title-content1 {
    line-height: 100px;
    font-weight: 700;
    align-self: center;
    width: 760px;
    margin: 48px 0;
    background-image: radial-gradient(circle, #c058ff 0, #ff5858 26%, #000 27%);
    font-size: 90px;
    background-position: 100% 100%;
    background-size: 150%;
    animation-name: bg-circle;
    animation-duration: 10s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  @keyframes bg-circle {
    0% {
      background-size: 350%;
      background-position: left 100% bottom 0;
    }
    50% {
      background-size: 350%;
      background-position: left -10% bottom 0;
    }

    100% {
      background-size: 350%;
      background-position: left 100% bottom 0;
    }
  }
  .create-bio {
    margin: auto;
  }
  .create-bio-bottom {
    font-size: 16px;
    margin-top: 16px;
  }
`;

const CreateBioTop = styled.div`
  display: flex;
  background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
  background-size: 165%;
  border: 2px solid transparent;
  transition: 0.25s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
  width: 450px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    .title-text {
      color: #333;
      line-height: 17px;
      font-weight: 600;
      padding-left: 24px;
      font-size: 18px;
    }
  }
  .create-input {
    width: 500px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.75rem;
    border: 2px solid white;
    height: 50px;
    border-radius: 0;
    outline: none;
    box-shadow: none;
  }
  .create-bio-link {
    background: 0 0 !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .create-bio-btn {
      width: auto;
      color: white;
      font-weight: 700;
      background-color: transparent;
      border: none;
      font-size: 16px;
    }
  }
  &:hover {
    background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
    background-size: 165%;
    animation-name: bg-anim;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
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
      <Content1>
        <h1 className="title-content1">The One Link for All Your Links</h1>
        <div className="create-bio">
          <CreateBioTop className="create-bio-top">
            <div className="title">
              <div className="title-text">bio.link/</div>
            </div>
            <Input placeholder="yourname" className="create-input" />
            <div className="create-bio-link">
              <a href="#" className="create-bio-a">
                <Button className="create-bio-btn">Claim my link</Button>
              </a>
            </div>
          </CreateBioTop>
          <div className="create-bio-bottom">
            It’s free, and takes less than a minute
          </div>
        </div>
      </Content1>
      <Feature className="feature">
        <div className="feature-list">
          <div className="flex space-x-8" data-v-2ae8992b="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-2ae8992b=""
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5532 2.00002C15.1056 2 14.1724 2.17246 13.1027 2.69607C12.7066 2.88993 12.335 3.12339 11.99 3.39576C11.6582 3.13866 11.3015 2.91592 10.9218 2.72813C9.83132 2.18878 8.85028 2 7.45455 2C3.71644 2 1 5.09727 1 9.11988C1 12.1578 2.69383 15.0923 5.84884 17.9299C7.50489 19.4193 9.61932 20.8933 11.1336 21.6775L12 22.1261L12.8664 21.6775C14.3807 20.8933 16.4951 19.4193 18.1512 17.9299C21.3062 15.0923 23 12.1578 23 9.11988C23 5.13984 20.2579 2.01536 16.5532 2.00002ZM21 9.11988C21 11.4999 19.5862 13.9493 16.8137 16.4429C15.3022 17.8023 13.359 19.1609 12 19.8737C10.641 19.1609 8.69782 17.8023 7.18628 16.4429C4.41382 13.9493 3 11.4999 3 9.11988C3 6.14772 4.88364 4 7.45455 4C8.56428 4 9.24813 4.13159 10.0351 4.52084C10.5 4.75077 10.9109 5.05437 11.2665 5.43377L12.0023 6.2187L12.7315 5.42755C13.0951 5.03295 13.512 4.72244 13.9819 4.49243C14.7459 4.11849 15.387 4 16.5491 4.00001C19.0882 4.01053 21 6.18896 21 9.11988Z"
                fill="url(#paint0_linear)"
                data-v-2ae8992b=""
              ></path>
              <defs data-v-2ae8992b="">
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22.1261"
                  gradientUnits="userSpaceOnUse"
                  data-v-2ae8992b=""
                >
                  <stop stopColor="#FF5959" data-v-2ae8992b=""></stop>
                  <stop
                    offset="1"
                    stopColor="#C059FF"
                    data-v-2ae8992b=""
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 data-v-2ae8992b="" className="">
              Free forever
            </h4>
          </div>
          <div className="flex space-x-8" data-v-2ae8992b="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-2ae8992b=""
            >
              <path
                d="M16.56 8.94L7.62 0L6.21 1.41L8.59 3.79L3.44 8.94C2.85 9.53 2.85 10.48 3.44 11.06L8.94 16.56C9.23 16.85 9.62 17 10 17C10.38 17 10.77 16.85 11.06 16.56L16.56 11.06C17.15 10.48 17.15 9.53 16.56 8.94ZM5.21 10L10 5.21L14.79 10H5.21ZM19 11.5C19 11.5 17 13.67 17 15C17 16.1 17.9 17 19 17C20.1 17 21 16.1 21 15C21 13.67 19 11.5 19 11.5ZM2 20H22V21.8H2V20Z"
                fill="url(#paint0_linear_1390_496)"
                data-v-2ae8992b=""
              ></path>
              <defs data-v-2ae8992b="">
                <linearGradient
                  id="paint0_linear_1390_496"
                  x1="2.86956"
                  y1="10.9"
                  x2="16.0059"
                  y2="19.7736"
                  gradientUnits="userSpaceOnUse"
                  data-v-2ae8992b=""
                >
                  <stop stopColor="#FF5858" data-v-2ae8992b=""></stop>
                  <stop
                    offset="1"
                    stopColor="#C058FF"
                    data-v-2ae8992b=""
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 data-v-2ae8992b="" className="">
              15+ themes
            </h4>
          </div>
          <div className="flex space-x-8" data-v-2ae8992b="">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-2ae8992b=""
            >
              <path
                d="M1 16.5002L4.66663 11.0003L10.1666 11.6114L13.869 4.38672"
                stroke="url(#paint0_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-v-2ae8992b=""
              ></path>
              <path
                d="M17.0279 9.74367L14.4612 2.50564L7.11143 4.73238"
                stroke="url(#paint1_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-v-2ae8992b=""
              ></path>
              <defs data-v-2ae8992b="">
                <linearGradient
                  id="paint0_linear"
                  x1="1.55952"
                  y1="10.4435"
                  x2="9.19635"
                  y2="16.4171"
                  gradientUnits="userSpaceOnUse"
                  data-v-2ae8992b=""
                >
                  <stop stopColor="#FF5858" data-v-2ae8992b=""></stop>
                  <stop
                    offset="1"
                    stopColor="#C058FF"
                    data-v-2ae8992b=""
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="8.73833"
                  y1="2.58407"
                  x2="9.35653"
                  y2="8.33127"
                  gradientUnits="userSpaceOnUse"
                  data-v-2ae8992b=""
                >
                  <stop stopColor="#FF5858" data-v-2ae8992b=""></stop>
                  <stop
                    offset="1"
                    stopColor="#C058FF"
                    data-v-2ae8992b=""
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 data-v-2ae8992b="" className="">
              Visitor stats
            </h4>
          </div>
          <div className="flex space-x-8" data-v-2ae8992b="">
            <svg
              width="15"
              height="22"
              viewBox="0 0 15 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-2ae8992b=""
            >
              <path
                d="M13.4651 8.7013C13.4285 8.63688 13.3754 8.58329 13.3113 8.54601C13.2471 8.50873 13.1742 8.48908 13.0999 8.48908H7.60113L8.52302 1.46492C8.53291 1.37092 8.51079 1.27633 8.46021 1.19638C8.40964 1.11643 8.33356 1.05579 8.24422 1.0242C8.15488 0.992614 8.05748 0.991929 7.96771 1.02226C7.87793 1.05258 7.801 1.11215 7.7493 1.19138L1.06218 12.8743C1.02307 12.9377 1.00164 13.0104 1.00009 13.0848C0.99854 13.1593 1.01693 13.2328 1.05336 13.2977C1.08979 13.3627 1.14294 13.4169 1.20734 13.4545C1.27173 13.4922 1.34504 13.5121 1.4197 13.5121H6.83633L6.10575 20.5468C6.09857 20.6405 6.12302 20.7339 6.1752 20.8121C6.22738 20.8903 6.3043 20.9489 6.39371 20.9785C6.48313 21.0082 6.57991 21.0071 6.66866 20.9755C6.7574 20.944 6.83301 20.8837 6.88345 20.8044L13.4601 9.12271C13.4982 9.05919 13.5188 8.98672 13.5197 8.91269C13.5205 8.83866 13.5017 8.76572 13.4651 8.7013Z"
                stroke="url(#paint0_linear)"
                strokeWidth="1.5"
                data-v-2ae8992b=""
              ></path>
              <defs data-v-2ae8992b="">
                <linearGradient
                  id="paint0_linear"
                  x1="1.54433"
                  y1="11"
                  x2="11.4214"
                  y2="15.5524"
                  gradientUnits="userSpaceOnUse"
                  data-v-2ae8992b=""
                >
                  <stop stopColor="#FF5858" data-v-2ae8992b=""></stop>
                  <stop
                    offset="1"
                    stopColor="#C058FF"
                    data-v-2ae8992b=""
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
            <h4 data-v-2ae8992b="" className="">
              Lightning fast (100ms)
            </h4>
          </div>
        </div>
      </Feature>
    </>
  );
}

export default ContentMain;
