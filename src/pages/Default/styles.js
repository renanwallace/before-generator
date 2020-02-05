import styled from 'styled-components';
import { fadeInLeft } from '../../styles/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: 0.4s ${fadeInLeft} ease-out;

  .title {
    text-align: center;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;
