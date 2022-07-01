import styled from "styled-components";
import { CheckIcon } from "../../components/svgs";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: var(--w-1100);
  margin: 100px auto 0 auto;
  .title-content {
    line-height: 1.625;
    font-size: 4.8rem;
    padding: 0;
    transition: all 0.75s ease;
    .text_gray_light {
      color: var(--gray-ish);
      transition: all 0.75s ease;
      font-size: 4.8rem;
      padding-left: 12px;
    }
  }
  .profile-list {
    overflow: hidden;
    .flex {
      display: flex;
      padding: 0 24px;
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
            border-radius: var(--boder-r-100);
            &:hover {
              transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0)
                scaleX(0.95) scaleY(0.95);
              transition-duration: 0.3s;
            }
          }
        }
        .profile-name {
          margin-top: 16px;
          font-size: 1.8rem;
          line-height: 17px;
          color: var(--gray-dark);
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
    <Wrapper className="opacity">
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
              <img src="https://cdn.bio.link/landing/user_1.webp" />
            </div>
            <div className="profile-name">
              Austin Archer
              <CheckIcon />
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
              <img src="https://cdn.bio.link/landing/user_2.jpg" />
            </div>
            <div className="profile-name">
              AC Milan
              <CheckIcon />
            </div>
            <div className="text-16 mt-12 text-gradient">bio.link/acmilan</div>
          </a>
          <a
            href="https://bio.link/jo_franco"
            target="_blank"
            className="profile-link"
          >
            <div className="profile-avt">
              <img src="https://cdn.bio.link/landing/user-3_1.jpeg" />
            </div>
            <div className="profile-name">
              Jo Franco
              <CheckIcon />
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
              <img src="https://cdn.bio.link/landing/user-4.png" />
            </div>
            <div className="profile-name">
              Padre Paulo
              <CheckIcon />
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
              <img src="https://cdn.bio.link/landing/user_5.png" />
            </div>
            <div className="profile-name">
              @afrochella
              <CheckIcon />
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
