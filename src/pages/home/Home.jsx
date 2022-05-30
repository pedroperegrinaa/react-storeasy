import React from 'react';
import Footer from '../../components/pageHome/footer/Footer';
import Item from '../../components/pageHome/itens/Item';
import MyItens from '../../components/pageHome/myItens/MyItens';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.scss';
const Home = () => {
    return (
        
        <div className="container-home">
            <Sidebar />
            <div className="content">
                <Item />
                <MyItens />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
