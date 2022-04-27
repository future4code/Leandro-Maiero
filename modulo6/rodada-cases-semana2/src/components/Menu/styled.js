import styled from "styled-components"

export const GeneralContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  background-color: transparent;
  width: auto;
  left: 7.5%;
  top: 10%;

  @media screen and (max-width: 900px) {
    top: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2.5em;
  }


`

export const DropdownSelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  width: 13em;
  font-size: 1.1rem;
  cursor: pointer;
  outline: 0;
  color: #333333;
  /* appearance: none; */

  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    color: #333333;

  }
`