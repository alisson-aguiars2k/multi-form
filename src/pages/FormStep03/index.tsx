import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep03 = () => {
  const history = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      history("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleFinishStep = () => {
    if (state.email && state.github !== "" && state.github !== "") {
      history("/Finish");;
    } else {
      alert("Preencha os dados");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos ?</h1>
        <p>Preencha o compo abaixo para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu Email ?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            required
            autoFocus
          />
        </label>

        <label>
          Qual seu GitHub ?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
            required
          />
        </label>

        <Link to="/step02" className="backButton">
          Voltar
        </Link>
        <button onClick={handleFinishStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
