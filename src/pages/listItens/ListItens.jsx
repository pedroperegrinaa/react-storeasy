import React from 'react';
import './ListItens.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const ListItens = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="listItens">

            <h1>Meus ítens</h1>

            <div className='list'>

                <div className='listItens'>
                <p>Computador </p>
                </div>
                <div className='listItens'>
                
                 <p>Celular </p>
                </div>
                <div className='listItens'>
                <p>maleta </p>
                </div>
                <div className='listItens'>
                <p>ferramentas </p>
                </div>
            
           
            
            </div>

            </div>
        </div>
    );
}

export default ListItens;