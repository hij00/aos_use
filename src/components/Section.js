import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";

const SSection = styled.div`
  padding: ${mainStyle.padding};
  padding-top: 200px;
  padding-bottom: 200px;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: -3px;
  margin-bottom: 50px;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 500px;
  background-color: lightgray;
  &:nth-child(2) {
    margin-top: 300px;
  }
  &:nth-child(3) {
    margin-top: 600px;
  }
`;

export const Section = () => {
  return (
    <SSection>
      <Title>This is Title Area</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
