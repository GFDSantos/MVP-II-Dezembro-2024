import Header from './Header/Header';
import Footer from './Footer/Footer';
import './style.css';

function Faleconosco() {
    return(
        <div className="body">
            <Header />
            <div className='faleconosco-body'>
                <b>Fale Conosco</b>
                <h1>Assessoria de Imprensa</h1>
                <p> E-mail: cury@maquinacohnwolfe.com</p>
                <h1>Cury Vendas RJ</h1>
                <p> Quitanda 86 - 7º andar Centro - Rio de Janeiro/RJ Telefone: (21) 3554-3350</p>
                <h1>Cury Vendas SP</h1>
                <p> Rua Robert Bosch, 544, Barra Funda - São Paulo/SP Telefone: (11) 3117-1313</p>
                <h1>Relacionamento</h1>
                <p> SP (11) 3117-1300 | - RJ (21) 3543- 6887 e 0800 314-9696 | De segunda-feira a sexta-feira das 09h às 16h.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Faleconosco;