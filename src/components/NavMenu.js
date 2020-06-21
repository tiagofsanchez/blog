import React from "react";
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import ToogleMode from "./ToogleMode";
import MobileMenu from "./MobileMenu";
import siteConfig from "../../data/SiteConfig";
import Logo from "../components/logo";

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
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding-top: 10px;
  place-content: center;
  justify-items: center;
  
`;

const LogoContainer = styled.div`
  width: 20px;
  margin-right: 5px;
`;
const Flex = styled.div`
  display: flex;
  align-items: justify;
`;

class NavMenu extends React.Component {
  state = {
    scrolled: false,
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
    this.setState((prevState) => ({
      ...prevState,
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    const { scrolled } = this.state;
    const { menuLinks , menuLinksMobile} = this.props;
    const { siteTitle } = siteConfig;

    let shadow = `none`;
    if (scrolled === true) {
      shadow = `1px 2px 10px rgba(0, 0, 0, 0.4)`;
    }

    return (
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
            zIndex: 100,
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
              {menuLinks.map((link) => {
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
                      color: `primary`,
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
        <MobileMenu>
          <NavLinksMenu>
            {menuLinksMobile.map((link) => {
              return (
                <Styled.h3 
                  key={link.url}
                  as={Link}
                  to={link.url}
                  activeStyle={{
                    borderBottom: "3px solid #CCCCCC",
                    display: `inline-block`,
                  }}
                  sx={{
                    mx: `15px`,
                    my: 0,
                    textDecoration: `none`,
                    color: `primary`,
                    display: `inline-block`,
                  }}
                >
                  {link.name}
                </Styled.h3 >
              );
            })}
          </NavLinksMenu>
        </MobileMenu>
      </nav>
    );
  }
}

export default NavMenu;
