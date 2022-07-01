import styled from "styled-components";
import { useEffect } from "react";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #ff5858, #c058ff);
  transform: matrix(1, 0.04, -0.07, 1, 0, 0) scale(1);
  width: var(--w-1300);
  border-radius: 12px;
  transition: var(--transis-all);
  margin: 0 auto;
  .dark-space {
    width: var(--w-1300);
    border-radius: 12px;
    padding: 64px 0;
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
    margin: 0 auto;
    transform: matrix(1, -0.04, 0.07, 1, 0, 0) scale(1);
    transition: all 0.72s ease;
    .text-gradient {
      background-image: linear-gradient(
        0.351turn,
        #ff5858 23.71%,
        #c058ff 78.8%
      );
      -webkit-background-clip: text;
      transition: var(--transis-all);
      -webkit-text-fill-color: transparent;
      text-align: center;
      font-size: 3.6rem;
      font-weight: var(--fw-600);
    }
    .flex-list {
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin: 0 80px;
      font-weight: var(--fw-600);
      justify-content: center;
      align-content: center;
      flex-direction: column;
      margin-top: 48px;
      .justify-center {
        display: flex;
        justify-content: center;
        img {
          border-radius: 10px;
          width: 350px;
          height: 257px;
        }
      }
      .wrapper-text {
        color: rgba(255, 255, 255, var(--tw-text-opacity));
        width: 350px;
        padding: 0;
        font-size: 2.4rem;
        line-height: 1.625;
        margin: 24px auto 0 auto;
        h2 {
          color: var(--white);
          font-size: 2.4rem;
          font-weight: var(--fw-600);
        }
        .text-whiteLOp {
          color: var(--gray-ish);
          font-weight: var(--fw-500);
          font-size: 1.8rem;
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
        <div className="scroll-content">
          <div className="text-gradient">Launch your page in seconds</div>
          <div className="flex-list">
            <div className="item">
              <div className="justify-center">
                <img src="https://cdn.bio.link/landing/claim.jpg" />
              </div>
              <div className="wrapper-text">
                <h2>Claim your bio link</h2>
                <h3 className="text-whiteLOp">
                  Choose your username, pick a theme (or design your own), and
                  publish your page.
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="justify-center">
                <img src="https://cdn.bio.link/landing/all_links.jpg" />
              </div>
              <div className="wrapper-text">
                <h2>Add all your links</h2>
                <h3 className="text-whiteLOp">
                  Add your socials, websites, videos, anything. Your bio link is
                  your new website.{" "}
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="justify-center">
                <img src="https://cdn.bio.link/landing/use_it_everywhere.jpg" />
              </div>
              <div className="wrapper-text">
                <h2>Use it everywhere</h2>
                <h3 className="text-whiteLOp">
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
