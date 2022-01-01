import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
// import { selectCars } from "../features/car/carSlice";
// import { useSelector } from "react-redux";
import { data } from "../data";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  // const cars = useSelector(selectCars);
  const [cars, setCars] = useState(data);
  return (
    <Container>
      <a href="/">
        <img src="/assets/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars.map((car) => {
          const { id, model, link } = car;
          return (
            <a href={link} key={id}>
              {model}
            </a>
          );
        })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars.map((car) => {
          const { id, model, link } = car;
          return (
            <li key={id}>
              <a href={link}>{model}</a>
            </li>
          );
        })}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    //text-transform: uppercase;
    padding: 0 15px;
    color: black;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color: black;
  }
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  // display: ${(props) => (props.show ? "none" : "block")};
  transform: ${(props) => (props.show ? "translateX(0)" : "translate(100%)")};
  transition: transform 0.2s;
  li {
    list-style-type: none;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      color: black;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 768px) {
    //display: none;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
`;
