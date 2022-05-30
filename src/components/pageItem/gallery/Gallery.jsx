import React from 'react';
import imagemGrande from '../imgs/garagem.jpg';
import './Gallery.scss';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="itemGrande">
                <img className="imgItemGrande" src={imagemGrande} alt="" />
            </div>
            <div className="itensPequenos">
                <img src={imagemGrande} alt="" className="imgItensPequenos" />
                <img src={imagemGrande} alt="" className="imgItensPequenos" />
                <img src={imagemGrande} alt="" className="imgItensPequenos" />
            </div>
        </div>
    );
};

export default Gallery;
