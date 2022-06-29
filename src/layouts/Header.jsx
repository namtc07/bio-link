import { useState, useEffect } from "react";
import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";
import { BioLogo } from "../components/svgs";

const HeaderAntd = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  line-height: 0;
  background-color: transparent;
  .mx-8 {
    margin-left: 8px;
    margin-right: 8px;
  }
  .nav-wrapper {
    display: flex;
    margin: auto;
    margin-top: 10px;
    transition: margin-top 0.5s ease;
    position: relative;
    width: 1300px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 15px 50px -15px rgba(0, 0, 0, 0.12);
    padding: 16px 24px;
    .nav-logo {
      margin-right: 32px;
      margin-left: 8px;
      cursor: pointer;
      align-self: center;
      font-weight: 500;
      font-size: 16px;
      svg {
        display: block;
        vertical-align: middle;
      }
    }
  }
  .nav-text {
    font-weight: 700;
    font-size: 16px;
    align-self: center;
    cursor: pointer;
    margin-right: 24px;
    &:hover {
      --tw-text-opacity: 1;
      color: rgba(75, 85, 99, var(--tw-text-opacity));
    }
  }
  .nav-reverse {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 1;
    align-items: center;
    .signup {
      background-color: black;
      color: white;
      border-radius: 100px;
      padding: 21px 24px;
      font-size: 16px;
      &:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
      }
    }
    .login {
      color: black;
      &:hover {
        --tw-text-opacity: 1;
        color: rgba(75, 85, 99, var(--tw-text-opacity));
      }
    }
    .faq-reverse {
      display: none;
    }
  }
`;

function HeaderHome() {
  useEffect(() => {
    const headerSc = document.querySelector(".nav-wrapper");
    const handleScoll = () => {
      window.scrollY > 20
        ? headerSc.classList.add("header_dark")
        : headerSc.classList.remove("header_dark");
    };

    window.addEventListener("scroll", handleScoll);

    //Cleanup fc
    () => {
      return window.removeEventListener("scroll", handleScoll);
    };
  }, []);
  return (
    <HeaderAntd>
      <div className="mx-8">
        <div className="nav-wrapper">
          <div>
            <div className="nav-logo">
              <BioLogo />
            </div>
          </div>
          <div className="nav-text">Features</div>
          <div className="nav-text">FAQ</div>
          <div className="nav-reverse">
            <a href="https://app.bio.link/signup" className="signup">
              Sign up
            </a>
            <a href="https://app.bio.link/login" className="nav-text login">
              Log in
            </a>
            <div className="nav-text faq-reverse">FAQ</div>
          </div>
        </div>
      </div>
    </HeaderAntd>
  );
}

export default HeaderHome;
