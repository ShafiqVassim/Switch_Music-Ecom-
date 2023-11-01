import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer }  from 'react-router-bootstrap';
import { connect } from 'react-redux'
import { logout } from '../redux/actions/userActions';
import logo from '../images/logo-no-background.png'
import SearchBox from './SearchBox'

const Header = ({ userLogin, logout,}) => {

    const logoutHandler =() => {
        logout()
    }

    const { userInfo } = userLogin;

    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg"  collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    {/* height={70} width={250} */}
                        <Navbar.Brand><img src={logo} alt="Logo" height={70} width={250}/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        </LinkContainer>
                        {
                            userInfo ? (
                                <NavDropdown title={userInfo.user.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )
                        }
                        {
                           userInfo && userInfo.user.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/productlist'>
                                    <NavDropdown.Item>Products</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/orderlist'>
                                    <NavDropdown.Item>Orders</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        )}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

const mapStateToProps = (state) => ({
    userLogin: state.userLogin,
  })

export default connect(mapStateToProps, { logout })(Header);