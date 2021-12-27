import logo from '../../images/logo.png'
// import './Information.css'

export default function Information() {
    return(
        <div className="inform">
            <img src={logo} className="logo" alt="Логотип" />
            <div className='text'>
                <p className='name'>
                    МОБУ Калтасинская СОШ №1 
                </p>
                <p className='address'>
                    Дата создания: 1924 год. Адрес: 452860, Республика Башкортостан, Калтасинский район, с. Калтасы, ул. Карла Маркса, 80.
                </p>
            </div>
        </div>  
    );
}