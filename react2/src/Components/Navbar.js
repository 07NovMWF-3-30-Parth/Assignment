// minimal css applied through css file
import './Navbar/navbar.css'

// imported all styled component
import HR from './Navbar/HR'
import Logo from './Navbar/Logo'
import Search from './Navbar/Search'
import Input from './Navbar/Input'
import Location from './Navbar/Location'
import Button from './Navbar/Buttons'
import Category from './Navbar/Category'
import UL from './Navbar/UL'
import Link from './Navbar/Link'
import ContentBetweenContainer from './Navbar/ContentBetweenContainer'
import Contain from './Navbar/Contain'

// this is Navbar component with styled component... most element with needed css transfrom into styed component
function Navbar() {
    return (
        <nav>
            <div>
                <ContentBetweenContainer>
                    <div className="nav-logo">
                        <Logo>Nest</Logo>
                    </div>
                    <Search>
                        <label>All Categories</label>
                        <Input type="search" placeholder="Search" />
                    </Search>
                    <div className="quickLinks">
                        <Location>
                            <option>Your Location</option>
                            <option>Ahmedabad</option>
                            <option>Surat</option>
                            <option>Rajkot</option>
                            <option>Baroda</option>
                        </Location>
                        <Button>Compare</Button>
                        <Button>Wishlist</Button>
                        <Button>Cart</Button>
                        <Button>Account</Button>
                    </div>
                </ContentBetweenContainer>
                <HR />
                <Contain>
                    <Category>
                        <option>Browse All Categories</option>
                        <option>Cake & Milk</option>
                        <option>Coffee & Tea</option>
                        <option>Pet Foods</option>
                        <option>Vegetabkes</option>
                    </Category>
                    <UL>
                        <li><Link href='#'>Hot Deals</Link></li>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Shop</Link></li>
                        <li><Link href="#">Vendors</Link></li>
                        <li><Link href="#">Mega Menu</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Pages</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </UL>
                </Contain>
            </div>
            <HR />
        </nav>
    )
}

export default Navbar;