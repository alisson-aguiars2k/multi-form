import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";
import { useEffect } from "react";


export const FormStep02 = () => {
  const history = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      history("/step03");
    } else {
      alert("Preencha os dados");
    }
  };

  const setLevel = (level: number) =>{
    dispatch ({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção qu melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />

        <SelectOption
          title="Sou Estudante"
          description="Estou começando a estudar programação."
          icon="🧑‍🎓"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou Programador"
          description="Já programo há 2 anos ou mais."
          icon="🧑‍💻"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
