import { listTopProducts } from '../redux/actions/productActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  const formattedPrice = (price) =>
    (price / 100).toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel
      controls={true}
      indicators={true}
      interval={2000}
      pause={false}
      fade
      className='carousel text-light  '
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
        {/* <Card className='my-3 p-3 rounded '> */}
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid className='flex d-block w-100 ' />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} {formattedPrice(product.price)}
              </h2>
            </Carousel.Caption>
          </Link>
          {/* </Card> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
