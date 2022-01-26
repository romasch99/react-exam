import React from 'react';
import {
  Nav,
  NavLink,
  NavStart,
  NavImg,
  NavMenu
} from '../atoms/NavElements';

import {CardButton} from "../atoms/CardElements"
  
export const Navbar = ({goLogin, goRegister}) => {
  return (
    <>
      <Nav>
        <NavStart>
            <NavImg src = {`${process.env.PUBLIC_URL}/logo192.png`} alt="logo"></NavImg>
            <CardButton onClick={goRegister} inputWidht= "8vw" inputColor = "#138d83d7" inputMarginTop ="0.1rem" inputFontSize = "1rem">
                Register
            </CardButton>
            <CardButton onClick={goLogin} inputWidht= "8vw" inputColor = "#138d83d7" inputMarginTop ="0.8rem" inputFontSize = "1rem">
                Login
            </CardButton>
        </NavStart>
        <NavMenu>
          <NavLink to='/' >
            Skills
          </NavLink>
          <NavLink to='/add' >
            Add skill
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  