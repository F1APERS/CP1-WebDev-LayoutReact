function ContactForm() {
    return ( 
        <>
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
        </>
     );
}

export default ContactForm;