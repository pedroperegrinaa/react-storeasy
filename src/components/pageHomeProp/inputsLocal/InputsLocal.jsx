import React from 'react';
import './InputsLocal.scss';
import { FormControl } from '@mui/material';
import FormattedIn from './inputLocal.tsx';
import FormattedNa from './inputLocal.tsx';

const InputsLocal = () => {
    return (
        <div>
            <div className="main-enderecoLocal">
                <FormControl>
                    <div
                        className="inputsProfileLocal"
                        style={{ marginTop: '10px' }}
                    >
                        <FormattedIn
                            mascara="00000-000"
                            labelCampo="CEP"
                            idCampo="standarCep"
                            rq="true"
                        />
                        <FormattedIn
                            mascara="000000"
                            labelCampo="Número"
                            idCampo="standardNumero"
                            rq="true"
                        />
                    </div>
                    <div className="inputsProfileLocal">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Bairro"
                            idCampo="standardBairro"
                            rq="true"
                        />
                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Rua"
                            idCampo="standardRua"
                            rq="true"
                        />
                    </div>
                    <div className="inputsProfileLocal">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Complemento"
                            idCampo="standardComplemento"
                        />
                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Cidade"
                            idCampo="standardRua"
                            rq="true"
                        />{' '}
                        <FormattedNa
                            mascara="**"
                            labelCampo="UF"
                            idCampo="standardUf"
                            rq="true"
                        />
                    </div>
                </FormControl>
            </div>
        </div>
    );
};

export default InputsLocal;
