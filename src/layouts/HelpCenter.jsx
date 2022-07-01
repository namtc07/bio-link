import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: black;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 64px;
  width: 48px;
  height: 48px;
  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  }
  .drop-up {
    position: absolute;
    bottom: 64px;
    right: 0;
    width: 250px;
    border-radius: 8px;
    padding: 20px 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
      rgb(13 12 34 / 10%) -6px 0px 30px 0px;
    animation: dropup 0.2s linear forwards;
    opacity: 1;
    @keyframes dropup {
      0% {
        visibility: hidden;
        transform: scale(0.95);
      }
      100% {
        visibility: visible;
        transform: scale(1);
      }
    }
    .drop-item {
      display: flex;
      position: relative;
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        background-color: rgba(34, 34, 34, 0.05);
      }
      svg {
        margin-right: 12px;
        margin-top: 4px;
      }
    }
  }
`;

function HelpCenter() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Wrapper onClick={handleShow}>
      {show && (
        <div className="drop-up">
          <div className="drop-item">
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://building.bio.link/feature-request"
              className="absolute w-full h-full left-0 top-0 cursor-pointer"
            ></a>
            <svg
              width="17"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-12 mt-4"
            >
              <path
                d="M11.1486 7.78517C11.0336 7.60642 10.8361 7.50017 10.6249 7.50017H6.24992V0.625264C6.24992 0.330268 6.04368 0.0752718 5.75493 0.0140226C5.46118 -0.0484765 5.17369 0.102771 5.05369 0.371518L0.0537577 11.6214C-0.0324911 11.8139 -0.0137412 12.0389 0.101257 12.2151C0.216256 12.3926 0.413753 12.5001 0.625 12.5001H4.99994V19.375C4.99994 19.67 5.20619 19.925 5.49493 19.9862C5.53868 19.995 5.58243 20 5.62493 20C5.86743 20 6.09368 19.8587 6.19617 19.6288L11.1961 8.37891C11.2811 8.18516 11.2649 7.96266 11.1486 7.78517Z"
                fill="#717171"
                className="fill-dark-on-h"
              ></path>
            </svg>
            <span className="text-16 text-blGrey font-inter font-medium group-hover:text-black">
              Feature requests
            </span>
          </div>
          <div className="drop-item">
            <a
              rel="nofollow noopener noreferrer"
              target="_blank"
              href="https://help.bio.link/"
              className="absolute w-full h-full left-0 top-0 cursor-pointer"
            ></a>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-12 mt-4"
            >
              <path
                d="M17.5006 4.16667C16.5756 3.875 15.559 3.75 14.584 3.75C12.959 3.75 11.209 4.08333 10.0007 5C8.79232 4.08333 7.04232 3.75 5.41732 3.75C3.79232 3.75 2.04232 4.08333 0.833984 5V17.9167C2.04232 17 3.79232 16.6667 5.41732 16.6667C7.04232 16.6667 8.79232 17 10.0007 17.9167C11.209 17 12.959 16.6667 14.584 16.6667C15.559 16.6667 16.5756 16.7917 17.5006 17.0833C18.1256 17.2917 18.6673 17.5417 19.1673 17.9167V5C18.6673 4.625 18.1256 4.375 17.5006 4.16667ZM17.5006 15.4167C16.584 15.125 15.584 15 14.584 15C13.1673 15 11.1257 15.5417 10.0007 16.25V6.66667C11.1257 5.95833 13.1673 5.41667 14.584 5.41667C15.584 5.41667 16.584 5.54167 17.5006 5.83333V15.4167Z"
                fill="#717171"
                className="fill-dark-on-h"
              ></path>
              <path
                d="M14.584 8.75C15.3173 8.75 16.0256 8.825 16.6673 8.96667V7.7C16.009 7.575 15.3006 7.5 14.584 7.5C13.1673 7.5 11.884 7.74167 10.834 8.19167V9.575C11.7757 9.04167 13.084 8.75 14.584 8.75Z"
                fill="#717171"
                className="fill-dark-on-h"
              ></path>
              <path
                d="M10.834 10.4085V11.7918C11.7757 11.2585 13.084 10.9668 14.584 10.9668C15.3173 10.9668 16.0256 11.0418 16.6673 11.1835V9.9168C16.009 9.7918 15.3006 9.7168 14.584 9.7168C13.1673 9.7168 11.884 9.9668 10.834 10.4085Z"
                fill="#717171"
                className="fill-dark-on-h"
              ></path>
              <path
                d="M14.584 11.9414C13.1673 11.9414 11.884 12.1831 10.834 12.6331V14.0164C11.7757 13.4831 13.084 13.1914 14.584 13.1914C15.3173 13.1914 16.0256 13.2664 16.6673 13.4081V12.1414C16.009 12.0081 15.3006 11.9414 14.584 11.9414Z"
                fill="#717171"
                className="fill-dark-on-h"
              ></path>
            </svg>
            <span className="text-16 text-blGrey font-inter font-medium group-hover:text-black">
              Help center
            </span>
          </div>
        </div>
      )}
      <div className="circle">
        <svg
          height="16"
          viewBox="0 0 14 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.28418 15.1758C7.32422 15.1758 7.89551 14.6045 8.11523 13.623C8.30566 12.3926 8.74512 11.7627 10.6934 10.6348C12.7588 9.41895 13.8281 7.91016 13.8281 5.69824C13.8281 2.28516 11.0303 0 6.87012 0C3.7207 0 1.37695 1.24512 0.439453 3.17871C0.146484 3.73535 0 4.29199 0 4.92188C0 6.03516 0.717773 6.75293 1.875 6.75293C2.76855 6.75293 3.42773 6.34277 3.79395 5.40527C4.2627 4.10156 5.22949 3.39844 6.66504 3.39844C8.27637 3.39844 9.38965 4.39453 9.38965 5.83008C9.38965 7.17773 8.81836 7.91016 6.92871 9.03809C5.2002 10.0488 4.30664 11.1914 4.30664 12.9199V13.125C4.30664 14.3262 5.03906 15.1758 6.28418 15.1758ZM6.31348 21.6943C7.64648 21.6943 8.71582 20.6836 8.71582 19.3945C8.71582 18.1055 7.64648 17.0947 6.31348 17.0947C4.99512 17.0947 3.92578 18.1055 3.92578 19.3945C3.92578 20.6836 4.99512 21.6943 6.31348 21.6943Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
}

export default HelpCenter;
