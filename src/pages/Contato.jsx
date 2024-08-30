import React from 'react';
import '../style/contato.css';  
import igicon from '../assets/icons/simples/ig.svg';
import discicon from '../assets/icons/simples/disc.svg';
import twicon from '../assets/icons/simples/twt.svg';
import ContactForm from '../components/forms/ContactForms';


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
            class="linha-vertical"></div>
            <ContactForm />
        </div>
    );
};

export default Contato;
