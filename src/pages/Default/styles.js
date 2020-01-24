import styled from 'styled-components';
import { fadeInDown } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  animation: 0.5s ${fadeInDown} linear both;
`;
