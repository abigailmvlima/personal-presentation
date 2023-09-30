import styled from "styled-components";
import themes from "themes/index";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  font-size: 190px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5%;
`;

export const Body = styled.div`
  display: flex;
  margin: 60px 5%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.div`
  display: flex;
  margin: 25px;
`;

export const Footer = styled.div`
  display: flex;
`;
