import React, { useState } from 'react';
import Input from './../../components/InputUnform';
import { Container } from './styles';

export default function Default() {

  console.log('renderizei o default');

  const [inputValue] = useState('');

  return (
    <Container className="before-color-background">
      <h1 className="title">Gerador</h1>
      <div>
        <Input name="CPF" value={inputValue} disabled={false} />
      </div>
    </Container>
  );
}
