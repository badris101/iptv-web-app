import styled from "styled-components";
import Logo from "iptv-ui-kit/assets/Svg/Logo";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Logo width="61px" />
      </Header>
      <main>{children}</main>
      <Footer>
        <span>
          © IPTV, Inc. 2021. We{" "}
          <a href="https://dl.downloadly.ir/Files/Elearning/FrontendMasters_SVG_Essentials_Animation_v2_2019-1.part1_Downloadly.ir.rar">
            love
          </a>
          our{" "}
          <a href="https://dl.downloadly.ir/Files/Elearning/FrontendMasters_SVG_Essentials_Animation_v2_2019-1.part2_Downloadly.ir.rar">
            users
          </a>
          !
        </span>
      </Footer>
    </Container>
  );
};

const Header = styled.header`
  padding: 25px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    padding: 0 100px;
    flex: 1 0 auto;
    display: flex;
  }
`;

const Footer = styled.header`
  display: flex;
  justify-content: center;
  padding: 25px;
`;

export default Layout;
