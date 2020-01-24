import styled from 'styled-components';
import { fadeInLeft } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: 0.4s ${fadeInLeft} ease-out;
`;
