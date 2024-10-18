import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import './Carrossel.css'
import Slides from './Slide';
import Slide2 from './Slide2';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Slides />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide2 />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Slide2 />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;