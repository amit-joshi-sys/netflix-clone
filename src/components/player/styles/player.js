import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 110px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.1);
    background-color: #ff0a16;
  }
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:after {
    color: white;
    position: absolute;
    left: 10px;
    top: -10px;
    content: "+";
    align-items: center;
    border-radius: 50px;
    height: 22px;
    width: 22px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
