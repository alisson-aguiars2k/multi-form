import { useNavigate} from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";

export const Finish = () => {
  const history = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <h1>
          Cadastro realizado! <span>👌</span>
        </h1>
        <hr />
        <p>O seu cadastro foi realizado com sucesso.</p>
        <hr />
        <C.Result>
          <h2>Esses são os seus dados cadastrados na plataforma! </h2>
          <h3>
            ✔️  Seu nome é: <span>{state.name}</span>
          </h3>
          <h3>
            ✔️  Seu nível Profissional é: <span>{state.level}</span>
          </h3>
          <h3>
            ✔️  Email: <span>{state.email}</span> <br />
          </h3>
          <h3>
            ✔️  GitHub: <span>{state.github}</span>
          </h3>
        </C.Result>
      </C.Container>
    </Theme>
  );
};
