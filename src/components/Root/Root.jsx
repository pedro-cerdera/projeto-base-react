import React, {useState, useEffect} from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import {
  TextInput,
  MaskInput,
  Icon,
  Image,
  DefaultButton,
  IconButton,
  LinkButton,
  MainButton,
  OutlineButton,
  TextButton,
  SplashScreen
} from "..";

const history = createBrowserHistory();

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=>setLoading(false), 1000);
  }, []);

  return (
  <>
     <SplashScreen show={loading} />
     <Router history={history}>
        <Switch>
          <Route
            path={"/exemplo"}
            render={props => <TextButton onClick={()=>props.history.push("/")}>{"Voltar"}</TextButton>}
          />
          <Route
            path={"/"}
            render={props =>
              <div>
                <Icon icon={"icon-home-solid"} color={"black"} />
                <TextInput placeholder={"Teste"} name={"Teste"} type={"text"} />
                <MaskInput name={"CEP"} kind={"zip-code"} placeholder={"12345-678"} />
                <Image src={"/assets/images/logo192.png"} />
                <DefaultButton>{"Simular"}</DefaultButton>
                <IconButton icon={"icon-home-solid"} />
                <LinkButton>{"Simular"}</LinkButton>
                <MainButton>{"Simular"}</MainButton>
                <OutlineButton>{"Simular"}</OutlineButton>
                <TextButton onClick={()=>props.history.push("/exemplo")}>{"Ir para exemplo"}</TextButton>
              </div>
            }
          />
        </Switch>
      </Router>

  </>
)};

export default Root;
