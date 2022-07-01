import { Layout } from "antd";
import { useEffect } from "react";
import { ContentMain } from "../layouts/layoutHome";
import styled from "styled-components";
import { HeaderHome, FooterHome, HelpCenter } from "../layouts";
const { Content } = Layout;

const LayoutAnt = styled(Layout)`
  background-color: #fff;
  transition: var(--transis-bgcl);
`;

const ContentAnt = styled(Content)`
  margin-top: 74px;
`;

function Home() {
  useEffect(() => {
    const bgDark = document.querySelector(".layout-main");

    const handleScoll = () => {
      window.scrollY > 100
        ? bgDark.classList.add("bg_dark")
        : bgDark.classList.remove("bg_dark");
      window.scrollY > 800 ? bgDark.classList.remove("bg_dark") : null;
    };
    window.addEventListener("scroll", handleScoll);
    //Cleanup fc
    () => {
      return window.removeEventListener("scroll", handleScoll);
    };
  }, []);

  return (
    <>
      <LayoutAnt className="layout-main">
        <HeaderHome />
        <ContentAnt>
          <ContentMain />
        </ContentAnt>
        <FooterHome />
      </LayoutAnt>
      <HelpCenter />
    </>
  );
}

export default Home;
