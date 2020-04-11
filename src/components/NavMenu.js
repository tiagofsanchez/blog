import React from "react";
import { Link } from "gatsby";

import ToogleMode from "./ToogleMode";
import ButtonMenu from "./ButtonMenu";
import siteConfig from "../../data/SiteConfig";
import Logo from "../components/logo";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import styled from "@emotion/styled";

const MenuPopUp = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 150px;
  width: 100%;
  border-top: solid 1px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media (min-width: 400px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  margin-top: 15px;
  padding: 0 20px 0 20px;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 400px) {
    display: none;
  }
`;

const NavLinksMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
width: 20px;
margin-right: 5px;   
`
const Flex = styled.div`
display: flex;
align-items: justify; 
`


class NavMenu extends React.Component {
  state = {
    scrolled: false,
    showMenu: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 30) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  menuhandler = () => {
    this.setState(prevState => ({
      ...prevState,
      showMenu: !prevState.showMenu
    }));
  };

  render() {
    const { scrolled, showMenu } = this.state;
    const { menuLinks } = this.props;
    const { siteTitle } = siteConfig;


    let shadow = `none`;
    if (scrolled === true) {
      shadow = `1px 2px 10px rgba(0, 0, 0, 0.4)`;
    }

    return (
      <>
        <nav>
          <Styled
            sx={{
              position: `fixed`,
              width: "100%",
              top: 0,
              left: 0,
              height: `60px`,
              backgroundColor: `background`,
              boxShadow: shadow,
              m: `auto`,
              zIndex: 100
            }}
          >
            <NavContainer sx={{ maxWidth: `container` }}>
              <Link to="/" sx={{ textDecoration: `none` }}>
                <Flex>
                  <LogoContainer>
                    <Logo />
                  </LogoContainer>
                  <Styled.h3 sx={{ my: 0 }}>{siteTitle}</Styled.h3>
                </Flex>
              </Link>
              <NavLinks>
                {menuLinks.map(link => {
                  return (
                    <Styled.h3
                      key={link.url}
                      as={Link}
                      to={link.url}
                      activeStyle={{ borderBottom: "3px solid #CCCCCC" }}
                      sx={{
                        mr: `15px`,
                        my: 0,
                        textDecoration: `none`,
                        color: `primary`
                      }}
                    >
                      {link.name}
                    </Styled.h3>
                  );
                })}
                <ToogleMode />
              </NavLinks>
            </NavContainer>
          </Styled>
          <ButtonMenu
            onClick={() => {
              this.menuhandler();
            }}
          />
          {showMenu ? (
            <MenuPopUp
              sx={{
                zIndex: 100,
                borderColor: `primary`,
                backgroundColor: `background`,
                boxShadow: shadow
              }}
            >
              <NavLinksMenu>
                {menuLinks.map(link => {
                  return (
                    <Styled.h2
                      key={link.url}
                      as={Link}
                      to={link.url}
                      activeStyle={{
                        borderBottom: "3px solid #CCCCCC",
                        display: `inline-block`
                      }}
                      sx={{
                        mx: `15px`,
                        my: 0,
                        textDecoration: `none`,
                        color: `primary`,
                        display: `inline-block`
                      }}
                    >
                      {link.name}
                    </Styled.h2>
                  );
                })}
                <ToogleMode />
              </NavLinksMenu>
            </MenuPopUp>
          ) : null}
        </nav>
      </>
    );
  }
}

export default NavMenu;
