// minimal css applied through css file
import "../Components/Header/header.css"

// imported all styled component
import H1 from './Header/H1'
import Main from './Header/Main'
import Contain from "./Header/Contain";
import H4 from './Header/H4'
import Input from './Header/Input'
import Button from './Header/Button'

// this is header component with styled component... most element with needed css transfrom into styed component
function Header() {
    return (
        <Contain>
            <header id="header" className="container">
                <Main>
                    <H1>Don't miss amazing<br /> grocery deals</H1>
                    <H4>Sign up for the daily newsletter</H4>
                    <Input type="email" placeholder="Your email address" id="email" name="email" />
                    <Button>Subscribe</Button>
                </Main>
            </header>
        </Contain>
    )
}

export default Header;