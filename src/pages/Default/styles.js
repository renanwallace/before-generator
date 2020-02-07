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
    color: white;
    margin: 0.5em 0 1em 0.5em;
    font-weight: bolder;
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const SwitchWrapper = styled.div`
  width: 90%;
  margin: 1em;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 70%;

  input {
    text-align: center;
    font-weight: bolder;
    background: white;
    font-size: 16px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  min-height: 60px;
`;
