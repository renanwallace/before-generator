import React, { useState, useRef } from 'react';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import Input from './../../components/InputUnform';
import { ButtonWraper, Container, InputWrapper, SwitchWrapper } from './styles';

export default function Default() {
  const cpfRef = useRef(null);
  const cnpjRef = useRef(null);

  const [inputValue] = useState('');
  const [checked, setChecked] = useState(false);

  const onChange = e => setChecked(check => !check);

  return (
    <Container>
      <h1 className="title">Gerador</h1>
      <InputWrapper>
        <Input name="CPF" value={inputValue} disabled={true} />
      </InputWrapper>
      <SwitchWrapper>
        <Switch
          checked={checked}
          onChange={onChange}
          id="switch"
          message="Utilizar máscara?"
        />
      </SwitchWrapper>
      <ButtonWraper>
        <Button type="button" onClick={() => {}} ref={cpfRef} text="CPF" />
        <Button type="button" onClick={() => {}} ref={cnpjRef} text="CNPJ" />
      </ButtonWraper>
    </Container>
  );
}
