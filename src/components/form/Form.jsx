import React from 'react';
import './Form.scss';

const Form = () => {
    return (
        <div className="Form">
            <form className="formulario">
                <input
                    type="text"
                    className="inputForm"
                    placeholder="onde você quer guardar seus bens ?"
                />

                <button className="btn">Pesquisar</button>
            </form>
        </div>
    );
};

export default Form;
