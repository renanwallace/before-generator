import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.2em;

  button {
    background-color: transparent;
    color: white;
    display: inline-block;
    min-width: 120px;
    padding: 7px 12px;
    margin: 5px 10px 5px 10;
    border: 2px solid white;
    font-weight: 400;
    border-radius: 0.2em;
    text-align: center;
    transition: all 0.25s ease-in-out;

    &:hover {
      opacity: 0.95;
      color: ${props => props.theme.colors.beforeColor};
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.11),
        0 6px 20px 0 rgba(0, 0, 0, 0.11);
    }

    &:active {
      box-shadow: 0 0 5px 1px lightgrey;
    }
  }
`;
