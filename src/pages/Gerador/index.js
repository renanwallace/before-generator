import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Gerador() {
  return (
    <Container className="before-color-background">
      <h1>Gerador</h1>
      <Link to="/">Home</Link>
    </Container>
  );
}
