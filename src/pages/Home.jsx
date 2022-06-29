import { Layout } from "antd";
import HeaderHome from "../layouts/Header";
import { useEffect } from "react";
import ContentMain from "../layouts/ContentMain";
import styled from "styled-components";
import FooterHome from "../layouts/Footer";

const { Content } = Layout;

const LayoutAnt = styled(Layout)`
  background-color: #fff;
  transition: background-color 0.75s ease;
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
    <LayoutAnt className="layout-main">
      <HeaderHome />
      <Content
        style={{
          marginTop: 74,
        }}
      >
        <ContentMain />
      </Content>
      <FooterHome />
    </LayoutAnt>
  );
}

export default Home;
