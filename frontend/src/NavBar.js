import { Nav, Navbar, Container} from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg='primary' data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/form">Add Recipe</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;