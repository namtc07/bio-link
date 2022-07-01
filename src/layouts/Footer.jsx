import styled from "styled-components";
import { Footer } from "antd/lib/layout/layout";
import {
  BioIcon,
  InstagramIcon,
  LineFooter,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../components/svgs";

const FooterAnt = styled(Footer)`
  padding-top: 8px;
  padding-bottom: 20px;
  text-align: center;
  background-color: transparent;
  .wrapper {
    width: 1100px;
    margin: auto;
    margin-top: 90px;
    margin-bottom: 16px;
    .wrapper-flex {
      display: flex;
      margin: 48px 0;
      justify-content: space-between;
      flex-direction: row;
      gap: 0;
      .wrapper-flex-left {
        display: flex;
        flex-direction: column;
        text-align: left;
        .flex-top {
          display: flex;
          gap: 8px;
          justify-content: flex-start;
          a {
            width: 125px;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translateX(var(--tw-translate-x))
              translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
              skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
              scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transition-duration: 75ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            &:hover {
              --tw-translate-y: -0.125rem;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
        .flex-bottom {
          display: flex;
          gap: 32px;
          margin-top: 32px;
          a {
            color: #000;
          }
          .cursor-pointer {
            cursor: pointer;
          }
        }
      }
      .wrapper-flex-right {
        display: flex;
        flex-direction: column;
        .flex-top {
          display: flex;
          justify-content: flex-end;
          gap: 32px;
          a {
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translateX(var(--tw-translate-x))
              translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
              skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
              scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            transition-duration: 75ms;
            transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            &:hover {
              --tw-scale-x: 1.1;
              --tw-scale-y: 1.1;
            }
          }
        }
        .flex-bottom {
          margin-top: 34px;
          text-align: center;
          font-size: 16px;
          --tw-text-opacity: 1;
          color: rgba(0, 0, 0, var(--tw-text-opacity));
          a {
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
            padding-right: 3px;
          }
        }
      }
    }
  }
`;

function FooterHome() {
  return (
    <FooterAnt>
      <div className="wrapper">
        <div className="flex justify-center">
          <LineFooter />
        </div>
        <div className="wrapper-flex">
          <div className="wrapper-flex-left">
            <div className="flex-top">
              <a
                href="https://play.google.com/store/apps/details?id=app.biolink"
                target="_blank"
                className="transform hover:-translate-y-0.5 duration-75 ease-out w-125p"
              >
                <img
                  src="https://cdn.bio.link/landing/google-play.png"
                  alt="get from googlplay"
                />
              </a>
              <a
                href="https://apps.apple.com/app/bio-link-link-in-bio/id1573294119#?platform=iphone"
                target="_blank"
                className="transform hover:-translate-y-0.5 duration-75 ease-out w-125p"
              >
                <img
                  src="https://cdn.bio.link/landing/app-store.png"
                  alt="get from appstore"
                />
              </a>
            </div>
            <div className="flex-bottom">
              <div className="cursor-pointer hover:text-gray-600">Features</div>
              <a
                href="https://help.bio.link/"
                target="_blank"
                className="hover:text-gray-600"
              >
                Help Center
              </a>
              <div className="cursor-pointer hover:text-gray-600">Terms</div>
              <div className="cursor-pointer hover:text-gray-600">Privacy</div>
              <div className="cursor-pointer hover:text-gray-600">Report</div>
            </div>
          </div>
          <div className="wrapper-flex-right">
            <div className="flex-top">
              <a
                href="https://twitter.com/@biodotlink"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/biodotlink/"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCMtHlkP8mJDQjxHPkwOOnbQ"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://tiktok.com/@biodotlink"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <TiktokIcon />
              </a>
              <a
                href="https://bio.link/biodotlink"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <BioIcon />
              </a>
            </div>
            <div className="flex-bottom">
              © Bio Link is a{" "}
              <a
                href="http://buymeacoffee.com/"
                target="_blank"
                className="text-gradient"
              >
                Buy Me a Coffee
              </a>
              creation
            </div>
          </div>
        </div>
      </div>
    </FooterAnt>
  );
}

export default FooterHome;
