
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';


import image1 from '../../assets/img-Home/img-carousel/image1.webp';
import image2 from '../../assets/img-Home/img-carousel/image2.webp';
import image3 from '../../assets/img-Home/img-carousel/image3.webp';

const Carousel = () => {
const images = [
    {
    src: image1,
    alt: 'Image 1',
    legend: 'Pedicura'
    },
    {
    src: image2,
    alt: 'Image 2',
    legend: 'Baños burbujeantes'
    },
    {
    src: image3,
    alt: 'Image 3',
    legend: 'Espacio de relax'
    },
];

return (
    <ReactCarousel className="custom-carousel" showThumbs={false} autoPlay infiniteLoop>
    {images.map((image, index) => (
        <div key={index}>
        <img src={image.src} alt={image.alt} />
        <p className="legend">{image.legend}</p>
        </div>
    ))}
    </ReactCarousel>
);
};

export default Carousel;