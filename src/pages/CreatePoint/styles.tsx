import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../styles/colors";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  header {
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header a {
    color: ${Colors.titleColor};
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;
  }
  header a svg {
    margin-right: 16px;
    color: ${Colors.primaryColor};
  }
  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
  }
  form h1 {
    font-size: 36px;
  }
  form fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }
  form legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  form legend h2 {
    font-size: 24px;
  }
  form legend span {
    font-size: 14px;
    font-weight: normal;
    color: ${Colors.textColor};
  }

  form .field-check {
    flex-direction: row;
    align-items: center;
  }
  form .field-check input[type="checkbox"] {
    background: #f0f0f5;
  }
  form .field-check label {
    margin: 0 0 0 8px;
  }
  form .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
  form button {
    width: 260px;
    height: 56px;
    background: ${Colors.primaryColor};
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;
  }
  form button:hover {
    background: #2fb86e;
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type="text"],
  input[type="email"],
  input[type="number"] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }
  input::placeholder {
    color: #a0a0b2;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const FieldGroup = styled.div`
 {
    flex: 1;
    display: flex;
  }

   ${Field} + ${Field} {
    margin-left: 24px;
  }
   input + input {
    margin-left: 24px;
  }

`;

export const ItemsGridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;  
`;

export const ItemsGridLi = styled.li<ContainerProps>`
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  cursor: pointer;
  span {
    flex: 1;
    margin-top: 12px;

    display: flex;
    align-items: center;
    color: ${Colors.titleColor};
  }
  ${({selected}) =>
    selected &&
    css`
      border: 2px solid #34cb79;
      background: #e1faec;
    `}
`;
