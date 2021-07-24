import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 0;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
  display: none;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  overflow: hidden;
  ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom}`};

  > ${Container} first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const Image = styled.img`
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
`;
export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.25s;

  &:hover {
    transform: scale(1.2);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      marign-right: 30px;
    }
  }
`;

export const Entities = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: row;
  margin-right: 10px;
  padding: 20px;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;
export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  fornt-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  margin-right: 10px;
  border-radius: 5px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black @media ();
  overflow: hidden;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;
