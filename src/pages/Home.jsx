import { Layout, Input, Button } from "antd";
import HeaderHome from "../layouts/Header";
import styled from "styled-components";
import ContentMain from "../layouts/ContentMain";

const { Content, Footer } = Layout;

function Home() {
  return (
    <Layout style={{ backgroundColor: "#fff" }}>
      <HeaderHome />
      <Content
        style={{
          marginTop: 74,
          backgroundColor: "#fff",
          height: "10000px",
        }}
      >
        <ContentMain />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Home;
