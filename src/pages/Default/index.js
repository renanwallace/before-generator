import React, { useEffect, useState, useRef } from 'react';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import Input from './../../components/InputUnform';
import { cpf, cnpj } from '../../helpers/generators';
import usePersistedState from '../../util/usePersistedState';
import {
  ButtonWraper,
  Container,
  InfoWrapper,
  InputWrapper,
  SwitchWrapper,
} from './styles';

export default function Default() {
  const cpfRef = useRef(null);
  const cnpjRef = useRef(null);

  const [checked, setChecked] = usePersistedState('pontuacao', false);
  const [inputValue, setInputValue] = usePersistedState('inputValue', '');
  const [showInfo, setShowInfo] = useState(false);

  const onChange = () => setChecked(check => !check);

  useEffect(() => {
    return () => {
      setShowInfo(true);
      navigator.clipboard.writeText(inputValue);
    };
  }, [inputValue]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        if (!showInfo) setShowInfo(false);
      }, 2500);
    };
  }, [showInfo]);
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
        <Button
          type="button"
          onClick={() => setInputValue(cpf(checked))}
          ref={cpfRef}
          text="CPF"
        />
        <Button
          type="button"
          onClick={() => setInputValue(cnpj(checked))}
          ref={cnpjRef}
          text="CNPJ"
        />
      </ButtonWraper>

      <InfoWrapper>
        <div className="info">
          {showInfo && <span>Copiado para a área de transferência</span>}
        </div>
      </InfoWrapper>
    </Container>
  );
}
