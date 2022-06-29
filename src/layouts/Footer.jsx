import { Footer } from "antd/lib/layout/layout";
import styled from "styled-components";

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
          <svg
            width="1101"
            height="8"
            viewBox="0 0 1101 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M0 6.96948C5.68452 6.96948 8.57997 5.04827 11.1347 3.35318C13.4413 1.82239 15.2636 0.613239 19.1573 0.613239C23.0507 0.613239 24.8726 1.82239 27.1792 3.3529C29.7336 5.04827 32.629 6.96948 38.3135 6.96948C43.9977 6.96948 46.8927 5.04799 49.4471 3.3529C51.7533 1.82211 53.5748 0.613239 57.4678 0.613239C61.3616 0.613239 63.1834 1.82239 65.49 3.3529C68.0444 5.04827 70.9399 6.96948 76.6244 6.96948C82.3093 6.96948 85.2043 5.04827 87.7591 3.3529C90.0657 1.82239 91.888 0.613239 95.7813 0.613239C99.6755 0.613239 101.497 1.82239 103.804 3.3529C106.359 5.04827 109.254 6.96948 114.939 6.96948C120.624 6.96948 123.519 5.04827 126.074 3.3529C128.381 1.82239 130.203 0.613239 134.096 0.613239C137.991 0.613239 139.813 1.82239 142.121 3.35318C144.675 5.04827 147.571 6.96948 153.256 6.96948"
                stroke="url(#paint0_linear_547_487)"
              ></path>
              <path
                d="M153.266 6.96973C158.95 6.96973 161.846 5.04851 164.4 3.35342C166.707 1.82263 168.529 0.613483 172.423 0.613483C176.316 0.613483 178.138 1.82263 180.445 3.35314C182.999 5.04851 185.895 6.96973 191.579 6.96973C197.263 6.96973 200.158 5.04823 202.713 3.35314C205.019 1.82235 206.84 0.613483 210.733 0.613483C214.627 0.613483 216.449 1.82263 218.756 3.35314C221.31 5.04851 224.205 6.96973 229.89 6.96973C235.575 6.96973 238.47 5.04851 241.025 3.35314C243.331 1.82263 245.154 0.613483 249.047 0.613483C252.941 0.613483 254.763 1.82263 257.07 3.35314C259.624 5.04851 262.52 6.96973 268.205 6.96973C273.89 6.96973 276.785 5.04851 279.34 3.35314C281.646 1.82263 283.468 0.613483 287.362 0.613483C291.257 0.613483 293.079 1.82263 295.386 3.35342C297.941 5.04851 300.837 6.96973 306.522 6.96973"
                stroke="url(#paint1_linear_547_487)"
              ></path>
              <path
                d="M306.52 6.96973C312.204 6.96973 315.1 5.04851 317.654 3.35342C319.961 1.82263 321.783 0.613483 325.677 0.613483C329.57 0.613483 331.392 1.82263 333.699 3.35314C336.253 5.04851 339.149 6.96973 344.833 6.96973C350.517 6.96973 353.412 5.04823 355.967 3.35314C358.273 1.82235 360.094 0.613483 363.987 0.613483C367.881 0.613483 369.703 1.82263 372.01 3.35314C374.564 5.04851 377.459 6.96973 383.144 6.96973C388.829 6.96973 391.724 5.04851 394.279 3.35314C396.585 1.82263 398.407 0.613483 402.301 0.613483C406.195 0.613483 408.017 1.82263 410.323 3.35314C412.878 5.04851 415.774 6.96973 421.459 6.96973C427.143 6.96973 430.039 5.04851 432.594 3.35314C434.9 1.82263 436.722 0.613483 440.616 0.613483C444.51 0.613483 446.333 1.82263 448.64 3.35342C451.195 5.04851 454.091 6.96973 459.776 6.96973"
                stroke="url(#paint2_linear_547_487)"
              ></path>
              <path
                d="M459.781 6.96973C465.466 6.96973 468.361 5.04851 470.916 3.35342C473.223 1.82263 475.045 0.613483 478.939 0.613483C482.832 0.613483 484.654 1.82263 486.96 3.35314C489.515 5.04851 492.41 6.96973 498.095 6.96973C503.779 6.96973 506.674 5.04823 509.228 3.35314C511.535 1.82235 513.356 0.613483 517.249 0.613483C521.143 0.613483 522.965 1.82263 525.271 3.35314C527.826 5.04851 530.721 6.96973 536.406 6.96973C542.091 6.96973 544.986 5.04851 547.54 3.35314C549.847 1.82263 551.669 0.613483 555.563 0.613483C559.457 0.613483 561.279 1.82263 563.585 3.35314C566.14 5.04851 569.035 6.96973 574.72 6.96973C580.405 6.96973 583.301 5.04851 585.855 3.35314C588.162 1.82263 589.984 0.613483 593.878 0.613483C597.772 0.613483 599.594 1.82263 601.902 3.35342C604.457 5.04851 607.352 6.96973 613.038 6.96973"
                stroke="url(#paint3_linear_547_487)"
              ></path>
              <path
                d="M613.047 6.96973C618.731 6.96973 621.627 5.04851 624.182 3.35342C626.488 1.82263 628.31 0.613483 632.204 0.613483C636.098 0.613483 637.919 1.82263 640.226 3.35314C642.78 5.04851 645.676 6.96973 651.36 6.96973C657.045 6.96973 659.94 5.04823 662.494 3.35314C664.8 1.82235 666.622 0.613483 670.515 0.613483C674.408 0.613483 676.23 1.82263 678.537 3.35314C681.091 5.04851 683.987 6.96973 689.671 6.96973C695.356 6.96973 698.251 5.04851 700.806 3.35314C703.113 1.82263 704.935 0.613483 708.828 0.613483C712.722 0.613483 714.544 1.82263 716.851 3.35314C719.406 5.04851 722.301 6.96973 727.986 6.96973C733.671 6.96973 736.566 5.04851 739.121 3.35314C741.428 1.82263 743.25 0.613483 747.143 0.613483C751.038 0.613483 752.86 1.82263 755.167 3.35342C757.722 5.04851 760.618 6.96973 766.303 6.96973"
                stroke="url(#paint4_linear_547_487)"
              ></path>
              <path
                d="M766.305 6.96973C771.989 6.96973 774.885 5.04851 777.439 3.35342C779.746 1.82263 781.568 0.613483 785.462 0.613483C789.355 0.613483 791.177 1.82263 793.484 3.35314C796.038 5.04851 798.934 6.96973 804.618 6.96973C810.302 6.96973 813.197 5.04823 815.752 3.35314C818.058 1.82235 819.879 0.613483 823.772 0.613483C827.666 0.613483 829.488 1.82263 831.795 3.35314C834.349 5.04851 837.245 6.96973 842.929 6.96973C848.614 6.96973 851.509 5.04851 854.064 3.35314C856.37 1.82263 858.193 0.613483 862.086 0.613483C865.98 0.613483 867.802 1.82263 870.109 3.35314C872.663 5.04851 875.559 6.96973 881.244 6.96973C886.929 6.96973 889.824 5.04851 892.379 3.35314C894.685 1.82263 896.507 0.613483 900.401 0.613483C904.296 0.613483 906.118 1.82263 908.425 3.35342C910.98 5.04851 913.876 6.96973 919.561 6.96973"
                stroke="url(#paint5_linear_547_487)"
              ></path>
              <path
                d="M919.557 6.96973C925.241 6.96973 928.137 5.04851 930.691 3.35342C932.998 1.82263 934.82 0.613483 938.714 0.613483C942.607 0.613483 944.429 1.82263 946.736 3.35314C949.29 5.04851 952.186 6.96973 957.87 6.96973C963.554 6.96973 966.449 5.04823 969.004 3.35314C971.31 1.82235 973.131 0.613483 977.024 0.613483C980.918 0.613483 982.74 1.82263 985.047 3.35314C987.601 5.04851 990.497 6.96973 996.181 6.96973C1001.87 6.96973 1004.76 5.04851 1007.32 3.35314C1009.62 1.82263 1011.44 0.613483 1015.34 0.613483C1019.23 0.613483 1021.05 1.82263 1023.36 3.35314C1025.92 5.04851 1028.81 6.96973 1034.5 6.96973C1040.18 6.96973 1043.08 5.04851 1045.63 3.35314C1047.94 1.82263 1049.76 0.613483 1053.65 0.613483C1057.55 0.613483 1059.37 1.82263 1061.68 3.35342C1064.23 5.04851 1067.13 6.96973 1072.81 6.96973"
                stroke="url(#paint6_linear_547_487)"
              ></path>
              <path
                d="M1072.82 6.96973C1078.5 6.96973 1081.4 5.04851 1083.96 3.35342C1086.26 1.82263 1088.08 0.613483 1091.98 0.613483C1095.87 0.613483 1097.69 1.82263 1100 3.35314"
                stroke="url(#paint7_linear_547_487)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_547_487"
                x1="6.66332"
                y1="3.79136"
                x2="7.12698"
                y2="-4.43997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_547_487"
                x1="159.929"
                y1="3.7916"
                x2="160.393"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_547_487"
                x1="313.183"
                y1="3.7916"
                x2="313.647"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_547_487"
                x1="466.445"
                y1="3.7916"
                x2="466.908"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_547_487"
                x1="619.71"
                y1="3.7916"
                x2="620.174"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_547_487"
                x1="772.968"
                y1="3.7916"
                x2="773.432"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_547_487"
                x1="926.22"
                y1="3.7916"
                x2="926.684"
                y2="-4.43973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_547_487"
                x1="1074"
                y1="3.7916"
                x2="1076.38"
                y2="-3.70913"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5858"></stop>
                <stop offset="1" stopColor="#C058FF"></stop>
              </linearGradient>
            </defs>
          </svg>
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
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.49096 26.9697C19.6797 26.9697 25.2525 18.5049 25.2525 11.1643C25.2525 10.9239 25.2525 10.6845 25.2363 10.4463C26.3204 9.65992 27.2563 8.68626 28 7.57089C26.9891 8.02034 25.9165 8.31496 24.8183 8.44488C25.9748 7.75073 26.8403 6.6588 27.2537 5.37239C26.1664 6.0195 24.9767 6.47551 23.7362 6.72073C22.901 5.83016 21.7963 5.24044 20.5932 5.04284C19.3901 4.84524 18.1556 5.05077 17.0807 5.62763C16.0058 6.20449 15.1505 7.12051 14.6471 8.23395C14.1437 9.34739 14.0202 10.5962 14.2959 11.787C12.0935 11.6763 9.93898 11.1023 7.97214 10.1024C6.0053 9.10256 4.27011 7.69912 2.8792 5.98321C2.17082 7.2061 1.95386 8.65375 2.27249 10.0314C2.59112 11.4091 3.42138 12.6132 4.59424 13.3986C3.71264 13.3727 2.85023 13.1342 2.08 12.7033V12.7737C2.08035 14.0562 2.52308 15.2991 3.3331 16.2916C4.14313 17.2841 5.27057 17.9651 6.5242 18.219C5.70867 18.4421 4.85298 18.4747 4.02292 18.3143C4.37704 19.418 5.06623 20.3831 5.99414 21.0748C6.92206 21.7665 8.0423 22.1501 9.19828 22.172C8.04974 23.0773 6.73448 23.7466 5.32773 24.1417C3.92099 24.5368 2.45037 24.6499 1 24.4745C3.53331 26.1046 6.48091 26.9694 9.49096 26.9654"
                    stroke="#0D0C22"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/biodotlink/"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7H24M9 1H21C25.4183 1 29 4.58172 29 9V21C29 25.4183 25.4183 29 21 29H9C4.58172 29 1 25.4183 1 21V9C1 4.58172 4.58172 1 9 1ZM15 21C11.6863 21 9 18.3137 9 15C9 11.6863 11.6863 9 15 9C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21Z"
                    stroke="#0D0C22"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCMtHlkP8mJDQjxHPkwOOnbQ"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.372 9.26956C30.21 8.62242 29.8801 8.02949 29.4157 7.55065C28.9512 7.07182 28.3686 6.72403 27.7267 6.54242C25.3813 5.96973 16 5.96973 16 5.96973C16 5.96973 6.61867 5.96973 4.27334 6.59697C3.63143 6.77857 3.04882 7.12636 2.58435 7.6052C2.11988 8.08403 1.79 8.67696 1.62802 9.3241C1.19879 11.7043 0.988829 14.1188 1.00078 16.5374C0.985479 18.9741 1.19545 21.4071 1.62802 23.8052C1.80659 24.4322 2.14387 25.0026 2.60726 25.4612C3.07065 25.9198 3.64449 26.2511 4.27334 26.4232C6.61867 27.0505 16 27.0504 16 27.0504C16 27.0504 25.3813 27.0505 27.7267 26.4232C28.3686 26.2416 28.9512 25.8938 29.4157 25.415C29.8801 24.9361 30.21 24.3432 30.372 23.6961C30.7979 21.3338 31.0078 18.9377 30.9992 16.5374C31.0145 14.1006 30.8046 11.6677 30.372 9.26956V9.26956Z"
                    stroke="#0D0C22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.9316 20.9971L20.7721 16.5382L12.9316 12.0793V20.9971Z"
                    stroke="#0D0C22"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@biodotlink"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5172 1.96973V23.2111C17.5172 26.9438 14.4913 29.9697 10.7586 29.9697C7.02594 29.9697 4 26.9438 4 23.2111C4 19.4784 7.02594 16.4525 10.7586 16.4525M26.2069 12.5904C21.4077 12.5904 17.5172 8.69993 17.5172 3.90076"
                    stroke="#0D0C22"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </a>
              <a
                href="https://bio.link/biodotlink"
                target="_blank"
                className="transform hover:scale-110 duration-75 ease-out"
              >
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_547_800)">
                    <rect
                      width="30"
                      height="30"
                      transform="translate(0 0.969727)"
                      stroke="#0D0C22"
                    ></rect>
                    <rect
                      x="0.9375"
                      y="1.90723"
                      width="28.125"
                      height="28.125"
                      stroke="#0D0C22"
                      strokeWidth="1.5"
                    ></rect>
                    <path
                      d="M9.42656 9.55629V7.94754C9.42656 7.81754 9.40219 7.73223 9.35344 7.6916C9.30469 7.64285 9.21125 7.61848 9.07312 7.61848H7.96406V9.88535H9.07312C9.21125 9.88535 9.30469 9.86504 9.35344 9.82441C9.40219 9.77566 9.42656 9.68629 9.42656 9.55629ZM9.42656 12.9322V11.2382C9.42656 11.1082 9.40219 11.0229 9.35344 10.9822C9.30469 10.9335 9.21125 10.9091 9.07312 10.9091H7.96406V13.2613H9.07312C9.21125 13.2613 9.30469 13.241 9.35344 13.2004C9.40219 13.1516 9.42656 13.0622 9.42656 12.9322ZM6.5625 6.59473H9.4875C10.3731 6.59473 10.8159 6.99691 10.8159 7.80129V9.45879C10.8159 9.97066 10.6453 10.2835 10.3041 10.3972C10.6453 10.511 10.8159 10.8035 10.8159 11.2747V13.0785C10.8159 13.8829 10.3731 14.285 9.4875 14.285H6.5625V6.59473Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M12.0034 6.59473H13.4049V14.285H12.0034V6.59473Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M15.9235 6.59473H17.4104C18.296 6.59473 18.7389 6.99691 18.7389 7.80129V13.0785C18.7389 13.8829 18.296 14.285 17.4104 14.285H15.9235C15.0379 14.285 14.5951 13.8829 14.5951 13.0785V7.80129C14.5951 6.99691 15.0379 6.59473 15.9235 6.59473ZM17.3373 12.8835V7.99629C17.3373 7.86629 17.3129 7.78098 17.2642 7.74035C17.2154 7.6916 17.126 7.66723 16.996 7.66723H16.3501C16.212 7.66723 16.1185 7.6916 16.0698 7.74035C16.021 7.78098 15.9967 7.86629 15.9967 7.99629V12.8835C15.9967 13.0135 16.021 13.1029 16.0698 13.1516C16.1185 13.1922 16.212 13.2125 16.3501 13.2125H16.996C17.126 13.2125 17.2154 13.1922 17.2642 13.1516C17.3129 13.1029 17.3373 13.0135 17.3373 12.8835Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M19.6982 14.285V12.6397H21.185V14.285H19.6982Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M7.96406 23.525H10.0116V24.5975H6.5625V16.9072H7.96406V23.525Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M10.7061 16.9072H12.1076V24.5975H10.7061V16.9072Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M16.3203 16.9072H17.6V24.5975H16.2837L14.6384 19.5032V24.5975H13.3466V16.9072H14.6994L16.3203 21.9285V16.9072Z"
                      fill="#0D0C22"
                    ></path>
                    <path
                      d="M23.2951 16.9072L21.7107 20.7341L23.2829 24.5975H21.7716L20.2482 20.7341L21.7838 16.9072H23.2951ZM18.7857 24.5975V16.9072H20.1873V24.5975H18.7857Z"
                      fill="#0D0C22"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_547_800">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.969727)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
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