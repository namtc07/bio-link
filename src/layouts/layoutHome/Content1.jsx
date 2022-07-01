import { Input, Button } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 25px;
  width: 840px;
  text-align: center;
  padding: 16px 24px;
  .title-content1 {
    font-weight: var(--fw-600);
    line-height: 100px;
    align-self: center;
    width: 760px;
    margin: 48px 0;
    background-image: radial-gradient(circle, #c058ff 0, #ff5858 26%, #000 27%);
    font-size: 9rem;
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
    font-size: 1.6rem;
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
    background-color: var(--white);
    .title-text {
      color: var(--gray-ish);
      line-height: 17px;
      font-weight: var(--fw-600);
      padding-left: 24px;
      font-size: 1.8rem;
    }
  }
  .create-input {
    width: 500px;
    font-size: 1.8rem;
    font-weight: var(--fw-600);
    line-height: 1.75rem;
    border: 2px solid white;
    height: 50px;
    border-radius: 0;
    outline: none;
    box-shadow: none;
  }
  .create-bio-link {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .create-bio-btn {
      width: auto;
      color: var(--white);
      font-weight: var(--fw-600);
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

function Content1() {
  return (
    <Wrapper className="opacity">
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
    </Wrapper>
  );
}

export default Content1;
