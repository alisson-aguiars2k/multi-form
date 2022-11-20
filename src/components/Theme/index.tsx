import { ReactNode } from "react";
import * as C from "./styles";
import { Header } from "../Header";
import { SideBarItem } from "../SideBarItem";
import {useForm } from '../../contexts/FormContext'

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
    const {state} = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step02"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Contatos"
              description="Como te achamos"
              icon="mail"
              path="/step03"
              active={state.currentStep === 3}
            />
            <SideBarItem
              title="Cadastro Finalizado"
              description="Cadastro realizado com sucesso"
              icon="finishIcon"
              path="/finish"
              active={state.currentStep === 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
