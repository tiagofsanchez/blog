/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  right: 0;
  z-index: 100;
  @media (min-width: 400px) {
    display: none;
  }
`;

const MobileMenu = ({ children }) => {
  return (
    <MenuContainer
      sx={{
        backgroundColor: `background`,
        borderTop: `1px solid `,
        borderTopColor: `primary`,
      }}
    >
      {children}
    </MenuContainer>
  );
};

export default MobileMenu;
