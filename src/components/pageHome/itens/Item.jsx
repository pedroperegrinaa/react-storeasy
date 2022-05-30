import React from 'react';
import './Item.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import armazem from '../img/armazem.png';
import espaco from '../img/espaco.png';
import quarto from '../img/quarto.png';
import garagem from '../img/garagem.png';

const Item = () => {
    return (
        <div className="Item">
            <h1 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '40px' }}>
               Qual categoria atende suas necessidades de armazenamento?
            </h1>
            <h1 style={{ textAlign: 'center', fontWeight: '400', marginBottom: '40px' }}>
              Encontre o espaço perfeito para seus bens. Bem pertinho de você!
            </h1>
            <ul className="List">
                <Swiper spaceBetween={50} slidesPerView={3}>
                    <SwiperSlide>
                        <li>
                            <p>Armazéns</p>
                            <img
                                src={armazem}
                                draggable="false"
                                alt="icone de armazem"
                            />
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li>
                            <p>Espaços pequenos</p>
                            <img
                                src={espaco}
                                draggable="false"
                                alt="icone de armazem"
                            />
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li>
                            <p>Quartos</p>
                            <img
                                src={quarto}
                                draggable="false"
                                alt="icone de armazem"
                            />
                        </li>
                    </SwiperSlide>
                    <SwiperSlide>
                        <li>
                            <p>Garagens</p>
                            <img
                                src={garagem}
                                draggable="false"
                                alt="icone de armazem"
                            />
                        </li>
                    </SwiperSlide>
                </Swiper>
            </ul>
        </div>
    );
};

export default Item;
