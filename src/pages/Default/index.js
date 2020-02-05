import React, { useState } from 'react';
import Input from './../../components/InputUnform';
import Button from '../../components/Button';
import { ButtonWraper, Container } from './styles';

export default function Default() {
  const [inputValue] = useState('');

  return (
    <Container>
      <h1 className="title">Gerador</h1>
      <div>
        <Input name="CPF" value={inputValue} disabled={true} />
      </div>
      <ButtonWraper>
        <Button type="button" onClick={() => {}} text="CPF" />
        <Button type="button" onClick={() => {}} text="CNPJ" />
      </ButtonWraper>
    </Container>
  );
}
