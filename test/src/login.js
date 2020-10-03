import React, {useContext} from 'react';
import './css/login.css';
import Error from './Error'
import StateContext from "./stateContext";

let password = "";
let login = "";



function Login() {
    const [state,setState] = useContext(StateContext);
    function checkCreated() {
        if(password.includes(" ") || password===" " || login.includes(" ") || login===" ") {
            setState(true);
        }
    }
    return (
        <StateContext.Provider value={state}>
                <div>
                    <div className="content">

                        <div className="title">
                            <strong>WeChat</strong>
                        </div>

                        <div className="login">
                            <input id="login" placeholder="Login" onChange={
                                function(e) {
                                    login=e.target.value;
                                }
                            }/>
                        </div>

                        <div className="password">
                            <input id="password" placeholder="Password" type="password" onChange={
                                function(e) {
                                    password=e.target.value;
                                }
                            }/>
                            <button id="visibility">
                                <img id="eye-visibility" src={'./img/visible.png'} width="25" height="25"/>
                            </button>
                        </div>

                        <div className="sign_in">
                            <button onClick={checkCreated}>Sign in</button>
                        </div>

                        <div className="line"></div>

                        <div className="create_account">
                            <button>Create account</button>
                        </div>

                        <Error/>

                    </div>
                </div>
        </StateContext.Provider>
    );
}


export default Login;


