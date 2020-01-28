import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link {
    color: white;
    &:hover {
      opacity: 0.85;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
`;

export const RouteList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  li {
    padding: 15px 8px 15px 8px;
    font-weight: bolder;
  }
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 22px;
  margin-left: 15px;
  letter-spacing: 1px;
  cursor: pointer;
`;
