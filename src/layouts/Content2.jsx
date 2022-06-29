import styled from "styled-components";
import { useEffect } from "react";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5858, #c058ff);
  transform: matrix(1, 0.04, -0.07, 1, 0, 0) scale(1);
  width: 1300px;
  border-radius: 12px;
  transition: all 0.75s ease;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  .dark-space {
    width: 1300px;
    transition: all 0.72s ease;
    transform: matrix(1, -0.04, 0.07, 1, 0, 0) scale(1);
    border-radius: 12px;
    padding-top: 64px;
    padding-bottom: 64px;
    --tw-bg-opacity: 1;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
    margin-left: auto;
    margin-right: auto;
    .text-gradient {
      background: #000;
      background-color: #000;
      background-image: linear-gradient(
        0.351turn,
        #ff5858 23.71%,
        #c058ff 78.8%
      );
      background-size: 100%;
      background-repeat: no-repeat;
      -webkit-background-clip: text;
      transition: all 0.75s ease;
      -webkit-text-fill-color: transparent;
      text-align: center;
      font-size: 36px;
      font-weight: 600;
    }
    .flex-list {
      gap: 32px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      display: grid;
      margin-left: 80px;
      margin-right: 80px;
      font-weight: 600;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      margin-top: 48px;
      .justify-center {
        display: flex;
        justify-content: center;
        img {
          border-radius: 10px;
        }
      }
      .wrapper-text {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
        width: 350px;
        padding-left: 0;
        padding-right: 0;
        font-size: 24px;
        line-height: 1.625;
        margin-top: 24px;
        margin-left: auto;
        margin-right: auto;
        h2 {
          color: white;
          font-size: 24px;
          font-weight: 600;
        }
        .text-whiteLOp {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          font-size: 18px;
          margin: 0;
        }
      }
    }
  }
`;

function Content2() {
  useEffect(() => {
    const scrollContent = document.querySelector(".dark-space");
    const handleScoll = () => {
      window.scrollY > 100
        ? scrollContent.classList.add("dark-space-black")
        : scrollContent.classList.remove("dark-space-black");
    };
    window.addEventListener("scroll", handleScoll);
    //Cleanup fc
    () => {
      return window.removeEventListener("scroll", handleScoll);
    };
  }, []);
  return (
    <Wrapper>
      <div className="dark-space">
        <div className="scrollContent">
          <div className="text-gradient">Launch your page in seconds</div>
          <div className="flex-list">
            <div className="mx-20 lg:mx-0">
              <div className="justify-center">
                <img
                  src="https://cdn.bio.link/landing/claim.jpg"
                  width="350"
                  height="257"
                  alt=""
                  className="landing_img rounded-md"
                />
              </div>
              <div className="wrapper-text">
                <h2>Claim your bio link</h2>
                <h3 className="text-whiteLOp text-18 font-inter font-medium">
                  Choose your username, pick a theme (or design your own), and
                  publish your page.
                </h3>
              </div>
            </div>
            <div className="mx-20 mt-64 lg:mx-0 lg:mt-0">
              <div className="justify-center">
                <img
                  src="https://cdn.bio.link/landing/all_links.jpg"
                  width="350"
                  height="257"
                  alt=""
                  className="landing_img rounded-md"
                />
              </div>
              <div className="wrapper-text">
                <h2>Add all your links</h2>
                <h3 className="text-whiteLOp text-18 font-inter font-medium">
                  Add your socials, websites, videos, anything. Your bio link is
                  your new website.{" "}
                </h3>
              </div>
            </div>
            <div className="mx-20 mt-64 lg:mx-0 lg:mt-0">
              <div className="justify-center">
                <img
                  src="https://cdn.bio.link/landing/use_it_everywhere.jpg"
                  width="350"
                  height="257"
                  alt=""
                  className="landing_img rounded-md"
                />
              </div>
              <div className="wrapper-text">
                <h2>Use it everywhere</h2>
                <h3 className="text-whiteLOp text-18 font-inter font-medium">
                  Use your bio link on your Instagram, Twitter, TikTok, emails,
                  wherever people follow you.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Content2;
