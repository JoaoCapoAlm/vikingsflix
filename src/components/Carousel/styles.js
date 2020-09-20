import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;
  @media (max-width: 800px) {
    font-size: 25px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
`;

export const Descritpion = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  display: inline-block;
  width: 60%;
  padding-left: 20px;

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
    margin-top: 0;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 16px;
`;
