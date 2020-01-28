/*global chrome*/
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, RouteList, Title } from './styles';

function Header() {
  const routes = [
    { name: "CPF/CNPJ", path: "/" },
    { name: "Pessoa", path: "/pessoa" }
  ];

  const Route = ({ route }) => (
    <li>
      <Link className="link" to={route.path}>{route.name}</Link>
    </li>
  );

  const openBefore = () => {
    chrome.tabs.create({ url: 'https://before.com.br/', active: false });
  }

  return (
    <Container>
      <Title onClick={openBefore} className="link">Before</Title>
      <Nav>
        <RouteList>
          {routes.map((route, index) => (
            <Route key={index} route={route} />
          ))}
        </RouteList>
      </Nav>
    </Container>
  );
}

export default memo(Header);
