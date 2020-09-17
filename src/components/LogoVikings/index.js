import styled from 'styled-components';
import Logo from '../../assets/img/Logo.png';

const logo = styled.img.attrs({ src: Logo, alt: 'Logo da VikingsFlix' })`
  max-width: 168px;
  @media (max-width: 800px){
    maxi-width: 105px;
  }
`;

export default logo;
