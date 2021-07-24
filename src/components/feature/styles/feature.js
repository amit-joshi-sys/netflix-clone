import styled from "styled-components/macro";

export const Title = styled.h1`
  color: white;
  max-width: 800px;
  font-size: 35px;
  font-weight: 500;
  margin: auto;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 8px solid #222;
  padding: 100px 45px;
`;

export const SubTitle = styled.h2`
  color: white;
  max-width: 600px;
  font-size: 25px;
  font-weight: normal;
  margin: auto;
  padding-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;
