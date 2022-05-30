import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home-prop.scss';
import Home from './home.png';
import Caixa from './box.png';
import Ticket from './ticket.png';
import Espacos from './storage.png';
import { Link } from 'react-router-dom';
import garagem from './garagem.jpg';
import Galeria from '../../components/pageHomeProp/galleryAdd/Gallery.jsx';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputCat from './InputCat';
import InputsLocal from '../../components/pageHomeProp/inputsLocal/InputsLocal';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const HomeProp = () => {
    let [timeStart, setTimeStart] = React.useState('00:00');
    let [timeEnd, setTimeEnd] = React.useState('00:00');

    const Calend = () => {
        const disabledDays = [
            {
                year: 2022,
                month: 3,
                day: 6,
            },
        ];
        const handleDisabledSelect = (disabledDay) => {
            alert(
                'Está data já se encontra alugada. Faça a escolha de outra data!',
                disabledDay,
            );
        };
        
        const [selectedDays, setSelectedDays] = React.useState([]);
        return (
            <div>
                <Calendar
                    value={selectedDays}
                    onChange={setSelectedDays}
                    colorPrimary="#DD0AC8"
                    shouldHighlightWeekends
                    disabledDays={disabledDays}
                    onDisabledDayError={handleDisabledSelect}
                />
                <p style={{ marginTop: '5px', color: '#2e2d2d7f' }}>
                    * Selecionar dias indisponiveis
                </p>
            </div>
        );
    };
    let Inicio = () => {
        return (
            <div
                className="content-espaco"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <h1 className="blog-title">Meus espaços</h1>
                <div
                    className="espaco-itens"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="espaco-item"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            
                        }}
                    >
                        <img src={garagem} alt="" className='imgInit' />
                        <div className="item-espaco-infos">
                            <div className="info-espaco">
                                <div className="info">
                                50m²    <span> |   &nbsp; $50 </span> 
                                </div>
                                <div className="info">
                                    <span>Cidade: </span> Curitiba / PR
                                </div>
                            
                                <div className="info">
                                    <span>Categoria </span> Garagem
                                </div>
                            </div>
                        </div>
                        <button
                            className="buttonVerItem"
                            style={{ cursor: 'pointer', font: 'bold' }}
                            onClick={() => setEstadoHome(<EditarEspaco />)}
                        >
                            Editar ítem
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    let AddEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Adicionar espaço</h1>
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    {/* <Galeria /> */}
                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="filled-basic"
                            label="Título"
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descrição"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                        />
                        <InputCat />
                    </Box>
                </div>
                <h3>Imagens do espaço</h3>
                <div className="espaco-itens">IMAGEM</div>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" onClick={()=> setEstadoHome(<InputAddLocal />)}>Próximo</Button>
                </div>
               
                <h3>Disponibilidade</h3>
                
            </div>
        );
    };

  let InputAddLocal = () => {
    return (
        <>
        &nbsp;&nbsp;
                &nbsp;&nbsp;
        <h3>Endereço do local</h3>
        <div className="espaco-itens">
        <InputsLocal />
        
        &nbsp;&nbsp;
                &nbsp;&nbsp;
        <div style={{display: 'flex', justifyContent: 'center'}}>

                <Button variant="contained" onClick={()=> setEstadoHome(<AddCalendarDate />)}>Próximo</Button>
                </div>
    </div>
    </>
    )
    }
    let AddCalendarDate = () => {
        return (
            <>
            <div className="espaco-itens">
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;até&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button variant="contained">PUBLICAR</Button>
                        </Stack>
                    </div>
                </div>
            
        </>
        )
        }
    let Tickets = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Tickets</h1>
                <div className="espaco-itens"></div>
            </div>
        );
    };

    let EditarEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Editar espaço</h1>
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    {/* <Galeria /> */}
                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="filled-basic"
                            label="Título"
                            variant="filled"
                            value="Texto de teste"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descrição"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <InputCat />
                    </Box>
                </div>
                <h3>Imagens do espaço</h3>
                <div className="espaco-itens">IMAGEM</div>
                <h3>Endereço do local</h3>
                <div className="espaco-itens">
                    <InputsLocal />
                </div>
                <h3>Disponibilidade</h3>
                <div className="espaco-itens">
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;até&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button variant="contained">EDITAR</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    };

  /*  inputsAdd = () => {
        return (
            <div>

            </div>
        );
    } */

    let [estadoHome, setEstadoHome] = React.useState(<Inicio />);

    return (
        <div className="container-home-prop">
            <Sidebar />
            <div className="prop-container">
                <div className="prop-buttons" style={{ display: 'flex' }}>
                    <Link to="/">
                        <div className="prop-button">
                            <img src={Home} alt="" />
                            <div className="button-frase">
                                <div>Home</div>
                                <div>Principal</div>
                            </div>
                        </div>
                    </Link>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Inicio />)}
                    >
                        <img src={Espacos} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Espaços</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<AddEspaco />)}
                    >
                        <img src={Caixa} alt="" />

                        <div className="button-frase">
                            <div>Adicionar</div>
                            <div>Espaços</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Tickets />)}
                    >
                        <img src={Ticket} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Tickets</div>
                        </div>
                    </div>
                </div>
                <main className="prop-content">{estadoHome}</main>
            </div>
        </div>
    );
};

export default HomeProp;
