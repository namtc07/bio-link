import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

const HeaderAntd = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  line-height: 0;
  background-color: #fff;
  padding-top: 10px;
  .mx-8 {
    margin-left: 8px;
    margin-right: 8px;
  }
  .nav-wrapper {
    display: flex;
    margin: auto;
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
  return (
    <HeaderAntd>
      <div className="mx-8">
        <div className="nav-wrapper">
          <div>
            <div className="nav-logo">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8922 12.6488V10.5103C11.8922 10.2107 11.7305 10.061 11.407 10.061H9.93335V13.0981H11.407C11.7305 13.0981 11.8922 12.9484 11.8922 12.6488ZM11.8922 17.519V15.2906C11.8922 15.1349 11.8563 15.027 11.7844 14.9671C11.7125 14.8952 11.5867 14.8593 11.407 14.8593H9.93335V17.9683H11.407C11.7305 17.9683 11.8922 17.8186 11.8922 17.519ZM7.39941 8.2998H12.1438C13.6654 8.2998 14.4262 8.95875 14.4262 10.2766V12.2894C14.4262 13.176 14.1566 13.7331 13.6174 13.9607C14.1566 14.1644 14.4262 14.6796 14.4262 15.5063V17.7347C14.4262 19.0646 13.6654 19.7295 12.1438 19.7295H7.39941V8.2998Z"
                  fill="black"
                ></path>
                <path
                  d="M16.0002 8.2998H18.5521V19.7295H16.0002V8.2998Z"
                  fill="black"
                ></path>
                <path
                  d="M22.4389 8.2998H24.8471C26.3566 8.2998 27.1114 8.95875 27.1114 10.2766V17.7347C27.1114 19.0646 26.3566 19.7295 24.8471 19.7295H22.4389C20.9174 19.7295 20.1566 19.0646 20.1566 17.7347V10.2766C20.1566 8.95875 20.9174 8.2998 22.4389 8.2998ZM24.5415 17.3932V10.6361C24.5415 10.3365 24.3858 10.1868 24.0743 10.1868H23.2117C22.8882 10.1868 22.7265 10.3365 22.7265 10.6361V17.3932C22.7265 17.6928 22.8882 17.8425 23.2117 17.8425H24.0743C24.3858 17.8425 24.5415 17.6928 24.5415 17.3932Z"
                  fill="black"
                ></path>
                <path
                  d="M30.2629 19.6998C29.4068 19.6998 28.7129 19.0058 28.7129 18.1498V18.0498C28.7129 17.1937 29.4068 16.4998 30.2629 16.4998C31.1189 16.4998 31.8129 17.1937 31.8129 18.0498V18.1498C31.8129 19.0058 31.1189 19.6998 30.2629 19.6998Z"
                  fill="black"
                ></path>
                <path
                  d="M9.96109 31.852H13.2498V33.739H7.40918V22.3093H9.96109V31.852Z"
                  fill="black"
                ></path>
                <path
                  d="M14.1321 22.3093H16.684V33.739H14.1321V22.3093Z"
                  fill="black"
                ></path>
                <path
                  d="M23.1407 22.3093H25.4949V33.739H23.1946L20.6966 26.892V33.739H18.3604V22.3093H20.6787L23.1407 29.1384V22.3093Z"
                  fill="black"
                ></path>
                <path
                  d="M34.6841 22.3093L32.3838 27.9523L34.6841 33.739H31.9166L29.7061 27.9523L31.9166 22.3093H34.6841ZM27.1003 33.739V22.3093H29.6522V33.739H27.1003Z"
                  fill="black"
                ></path>
                <path
                  d="M1 1H41V41H1V1Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
              </svg>
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
