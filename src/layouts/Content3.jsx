import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1100px;
  margin-top: 100px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  .title-content {
    line-height: 1.625;
    font-size: 48px;
    padding-left: 0;
    padding-right: 0;
    .text_gray_light {
      color: #bbb;
      transition: all 0.75s ease;
      font-size: 48px;
    }
    /* .text_gray {
      color: #222;
      transition: all 0.75s ease;
    } */
  }
  .profile-list {
    overflow: hidden;
    .flex {
      display: flex;
      padding-left: 24px;
      padding-right: 24px;
      margin-top: 64px;
      .profile-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:not(:first-child) {
          margin-left: 48px;
        }

        .profile-avt {
          background: linear-gradient(0.351turn, #ff5858 23.71%, #c058ff 78.8%);
          background-size: 165%;
          overflow: hidden;
          border-radius: 100%;
          transition: 0.25s ease-in-out;
          img {
            object-fit: cover;
            width: 174.91px;
            height: 174.91px;
            max-width: 100%;
            border-radius: 100%;
            &:hover {
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              --tw-rotate: 0;
              --tw-skew-x: 0;
              --tw-skew-y: 0;
              --tw-scale-x: 0.95;
              --tw-scale-y: 0.95;
              transform: translateX(var(--tw-translate-x))
                translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
                skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
                scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
              transition-duration: 0.3s;
            }
          }
        }
        .profile-name {
          margin-top: 16px;
          font-size: 18px;
          line-height: 17px;
          color: #333;
          svg {
            display: inline;
            vertical-align: middle;
            margin-left: 6px;
            margin-bottom: 3px;
          }
        }
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
          font-size: 16px;
          margin-top: 12px;
        }
      }
    }
  }
`;

function Content3() {
  return (
    <Wrapper>
      <h3 id="profiles" className="title-content">
        Loved by thousands
        <span className="text_gray text_gray_light">
          of artists, writers, musicians, podcasters, youtubers, gamers,
          developers, hobbyists, brands...
        </span>
      </h3>
      <div className="profile-list">
        <div className="flex">
          <a
            href="https://bio.link/austinarcher"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img
                src="https://cdn.bio.link/landing/user_1.webp"
                alt=""
                className=""
              />
            </div>
            <div className="profile-name">
              Austin Archer
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline -mt-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                  fill="#0095F6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="text-16 mt-12 text-gradient">
              bio.link/austinarcher
            </div>
          </a>
          <a
            href="https://bio.link/acmilan"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img
                src="https://cdn.bio.link/landing/user_2.jpg"
                alt=""
                className=""
              />
            </div>
            <div className="profile-name">
              AC Milan
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline -mt-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                  fill="#0095F6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="text-16 mt-12 text-gradient">bio.link/acmilan</div>
          </a>
          <a
            href="https://bio.link/jo_franco"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img
                src="https://cdn.bio.link/landing/user-3_1.jpeg"
                alt=""
                className=""
              />
            </div>
            <div className="profile-name">
              Jo Franco
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline -mt-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                  fill="#0095F6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="text-16 mt-12 text-gradient">
              bio.link/jo_franco
            </div>
          </a>
          <a
            href="https://bio.link/padrepauloricardo"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img
                src="https://cdn.bio.link/landing/user-4.png"
                alt=""
                className=""
              />
            </div>
            <div className="profile-name">
              Padre Paulo
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline -mt-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                  fill="#0095F6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="text-16 mt-12 text-gradient">
              bio.link/padrepaulorica...
            </div>
          </a>
          <a
            href="https://bio.link/afrochella"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img
                src="https://cdn.bio.link/landing/user_5.png"
                alt=""
                className=""
              />
            </div>
            <div className="profile-name">
              @afrochella
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline -mt-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                  fill="#0095F6"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="text-16 mt-12 text-gradient">
              bio.link/afrochella
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Content3;
