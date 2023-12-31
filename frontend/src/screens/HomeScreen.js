import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../redux/actions/productActions';
import { connect } from 'react-redux';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = ({ listProducts, productList }) => {

    useEffect(() => {
        listProducts();
    }, [listProducts]);

    const { loading, error, products } = productList;

    return (
        <div className='register-color'>
           <ProductCarousel />
           <h1 className='register-color'>Latest Products</h1>
            {   loading ? <Loader /> : 
                error ? <Message variant='danger'>{error}</Message> : 
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} xm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row> 
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    productList: state.productList
})

export default connect(mapStateToProps, { listProducts })(HomeScreen);