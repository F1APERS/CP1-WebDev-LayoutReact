import React from 'react';
import '../style/contato.css';  
import igicon from '../assets/icons/simples/ig.svg';
import discicon from '../assets/icons/simples/disc.svg';
import twicon from '../assets/icons/simples/twt.svg';


const Contato = () => {
    return (
        <div className="container">
            <div className="left-side">
                <h2>Dúvidas e suporte, entre em contato:</h2>
                <div className="social-icons">
                    <a href="#"><img src={twicon} alt="Twitter" /></a>
                    <a href="#"><img src={igicon} alt="Instagram" /></a>
                    <a href="#"><img src={discicon} alt="Discord" /></a>
                </div>
            </div>
            <div 
            class="linha-vertical"
            ></div>
            <div className="right-side">
                <form className='form-contato'>
                    <div className='form-item'>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className='form-item'>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className='form-item'>
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
            
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;
