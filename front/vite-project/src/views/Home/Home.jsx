import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
        <div>
        <h1 className="titulo">PetSpa</h1>
        <div className='carousel'>
            < Carousel />
        </div>
        <p className='descripcion'>
        ¡Bienvenido a PetSpa!
        El mejor lugar para dejar a tu amigo canino.


        </p>
    </div>
    <Footer />
</div>
    );
};

export default Home;