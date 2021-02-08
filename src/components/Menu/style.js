import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--color-logo);

  @media (max-width: 800px){
    height: 40px;
    justify-content: center;
    padding-right: 0;
  }
`;

export default Container;
