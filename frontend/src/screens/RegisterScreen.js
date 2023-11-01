import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../redux/actions/userActions';

const RegisterScreen = ({ register , userRegister }) => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { loading, error, userInfo } = userRegister;

    const navigate = useNavigate();
    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {
        
        if (userInfo) {
            navigate(redirect)   
        }

    }, [navigate, redirect, userInfo]);

    const changeHandler = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })
    }

    const submitHandler = e => {
        e.preventDefault()

        register(data);
    }


    return (
        <Container className=''>
        <FormContainer >
        <h1 className='register-color'>Sign Up</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler} >
            <Form.Group controlId='name'>
                <Form.Label className='pt-2 mt-2 '><h5 className='register-color'>Username</h5></Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter username'
                onChange={changeHandler}
                value={data.name}
                name="name"
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label className='pt-2 mt-2'> <h5 className='register-color'>Email Address</h5></Form.Label>
                <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={changeHandler}
                value={data.email}
                name="email"
                ></Form.Control>
            </Form.Group>
  
            <Form.Group controlId='password'>
                <Form.Label className='pt-2 mt-2'><h5 className='register-color'>Password</h5></Form.Label>
                    <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={data.password}
                    onChange={changeHandler}
                    name='password'
                    ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password2'>
                <Form.Label className='pt-2 mt-2'><h5 className='register-color'>Confirm password</h5></Form.Label>
                    <Form.Control
                    type='password'
                    placeholder='Enter confirm password'
                    value={data.password2}
                    onChange={changeHandler}
                    name='password2'
                    ></Form.Control>
            </Form.Group>
  
            <Button type='submit' variant='primary' className='my-3'>
                Register
            </Button>
        </Form>

        <Row className='py-3'>
            <Col className='register-color'>
            Have an Account?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className='register-color'>
                    Login
                </Link>
            </Col>
      </Row>
      </FormContainer>
    </Container >
    )
}

const mapStateToProps = (state) => ({
  userRegister: state.userRegister
})

export default connect(mapStateToProps, { register })(RegisterScreen);