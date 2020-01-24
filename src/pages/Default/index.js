import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Default() {
  return (
    <Container>
      <h1>Bem vindo ao default</h1>
      <Link to="/gerador">Gerador</Link>
    </Container>
  );
}
