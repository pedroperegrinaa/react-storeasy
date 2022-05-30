import React from 'react';
import './Sidebar.scss';
import img from '../pageHome/img/logo-storeasy.png';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import person from '../pageHome/img/pessoa-perfil.png';
import item from '../pageHome/img/itens.png';
import espaço from '../pageHome/img/espaço.png';
import { Link } from 'react-router-dom';
import Form from '../form/Form';

const Sidebar = () => {
    return (
        <header className="Side">



            <div className="left">
                <Link to="/">
                    <img src={img} alt="" className="logo" />
                </Link>
            </div>

            <nav className="middle">

                

                <Form />
                <Link to="/logar">
                    <div className="login">
                        <button className="btn_login">Acesse</button>
                    </div>
                    </Link>
                    <Link to="/home">
                    <div className="enterHome">
                        <button className="btn_login">Sou proprietário</button>
                    </div>
                    </Link>

                    <Link to="/logar">
           
                    </Link>

                    
            <ul className="lista">

            <li>
                <Link to="/listItens">
                <img 
                src={item}
                alt="Meus ítens"
                className='itens'

                />
                </Link>
                
                    </li>
                    <li>
                        <Link to="/espacos">
                        <img 
                        src={espaço}
                        alt="Meus ítens"
                        className='espaço'
                        />
                        </Link>
                       
                    </li>
                
                    <li>
                        <CommentOutlinedIcon color="#1b1b1b" fontSize="large" />
                    </li>
                    <li>
                        <CircleNotificationsOutlinedIcon
                            color="#1b1b1b"
                            fontSize="large"
                        />
                    </li>
                 
                    <Link to="/profile">
                        <li>
                            <img
                                src={person}
                                alt="icone do perfil"
                                className="person"
                            />
                        </li>
                    </Link>
                </ul>

                <div className="exit">
                    <ExitToAppTwoToneIcon fontSize="large" />
                </div>
            </nav>
        </header>
    );
};

export default Sidebar;
