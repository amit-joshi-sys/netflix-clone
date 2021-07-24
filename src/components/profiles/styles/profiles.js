import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 48px;
  color: white;
  text-align: center;
  font-weight: 500;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  cursor: pointer;
  height: auto;
  border: 3px solid black;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
`;

export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: #e5e5e5;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover ${Picture} {
    transform: scale(1.15);
    transition: all 0.25s ease-in-out;
    border: 3px solid white;
  }
  &:hover ${Name} {
    transform: scale(1.15);
    transition: all 0.25s ease-in-out;
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
