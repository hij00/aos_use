import Aos from "aos";
import { useEffect } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";
import "aos/dist/aos.css";

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
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <SSection>
      <Title data-aos="fade-up" data-aos-delay="300">
        This is Title Area
      </Title>
      <ConWrap>
        <Con data-aos="flip-left"></Con>

        <Con data-aos="flip-left"></Con>
        <Con data-aos="flip-left"></Con>
      </ConWrap>
    </SSection>
  );
};
