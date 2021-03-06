import React, { useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../styles/Colors";
// This is the full logo with text
import logo from "../../public/WE_LOGO.png";
import logoName from '../../public/WE_LOGO_NAME.png'
// This is the IMG portion of logo only
import imgLogo from "../../public/IMG_Logo.png";
// React Icons being used
import { BiSearchAlt } from "react-icons/bi";
// import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { InputForm } from "../homepage/InputForm";
import TypeAhead from "./TypeAhead";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => Object.values(state.cart));

  const [isOpen, setIsOpen] = React.useState(false);
  // let maxHeight = 0;
  // if (isOpen) {
  //   maxHeight = "1000px";
  // }
  const toggleSearchForm = () => setIsOpen(!isOpen);
  const [showForm, setShowForm] = useState(false);
  const displayForm = () => setShowForm(true);
  const hideForm = () => setShowForm(false);


  
  return (
    <Wrapper>
      <Logo src={logo} />
      <Nav>
        <A to="/">
          <ImgLogo src={imgLogo} />
        </A>
        <Button onClick={toggleSearchForm}>
          <BiSearchAlt size={35} />
        </Button>
        <A to="/cart" /* onClick to go to cart / cart modal */>
          <FaShoppingCart size={35} />
          <CartItemNumDisplay>{cartItems.length}</CartItemNumDisplay>
        </A>
      </Nav>
      <LogoName src={logoName} />

      {isOpen ? <TypeAhead isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
      <Input type="submit" value="Options" onClick={displayForm} />
      {showForm ? <InputForm /> : null}
      {showForm ? (
        <Input type="submit" value="Hide" onClick={hideForm} />
      ) : null}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${COLORS.BLUE.PRIMARY};
  z-index: 100;
  transition: height 0.5ms;
`;

const LogoName = styled.img`
  @media (min-width: 900px) {
    display: none;
  }
  height: 25px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 899px) {
    display: none;
  }
`;

const Nav = styled.nav`
  width: 750px;
  @media (max-width: 800px) {
    width: 275px;
    padding-top: 15px;
  }
  display: flex;
  justify-content: space-evenly;
  
`;

const A = styled(Link)`
  color: ${COLORS.PURPLE.PRIMARY};
`;

const CartItemNumDisplay = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${COLORS.BLUE.PRIMARY};
  color: white;
  border-radius: 50%;
  padding: 7px;
  font-size: 10px;
  font-weight: bold;
  left: 80%;
`;

const ImgLogo = styled.img`
  height: 35px;
`;

const Input = styled.input`
  background: ${COLORS.BLUE.PRIMARY};
  color: ${COLORS.BACKGROUND.PRIMARY};
  padding: 3px 8px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`;

const Button = styled.button`
  color: ${COLORS.PURPLE.PRIMARY};
  background: none;
  border: none;
`;
