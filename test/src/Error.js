import React from "react";
import StateContext from "./stateContext";

function Error() {
    return (
        <StateContext.Consumer>
            {
                state => (
                    <div className={state.toString()}>
                        <p id="error">Неверный логин или пароль</p>
                    </div>
                )
            }
        </StateContext.Consumer>
    );
}

export default Error;
