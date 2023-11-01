import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../redux/actions/userActions';

const LoginScreen = ({ login , userLogin }) => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const { loading, error, userInfo } = userLogin;

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

    login(data);
  }


    return (
      <div className="">
      <Container className=''  >
        <FormContainer>
        <h1 className='register-color'>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label className='pt-2 mt-2' ><h5 className='register-color'>Email Address</h5></Form.Label>
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
  
            <Button type='submit' variant='primary' className='my-3'>
                Sign In
            </Button>
        </Form>

        <Row className='py-3'>
        <Col className='register-color'>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className='register-color'>
            Register
          </Link>
        </Col>
      </Row>
      </FormContainer>
      </Container>
      </div>
    )
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin
})

export default connect(mapStateToProps, { login })(LoginScreen);