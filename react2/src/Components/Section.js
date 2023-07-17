// minimal css applied through css file
import "./Section/section.css"

// imported all styled component
import Contain from "./Header/Contain";
import H2 from "./Section/H2"
import Link from "./Section/Link"
import Product from "./Section/Product"
import ProductList from "./Section/ProductList"


// this is Section component with styled component... most element with needed css transfrom into styed component
function Section() {
    return (
        <section>
            <Contain>
                <H2>Featured Categories</H2>
                <Link href="#">Cake & Milk</Link>
                <Link href="#">Coffee & Tea</Link>
                <Link href="#">Pet Foods</Link>
                <Link href="#">Vegetables</Link>
                <ProductList>
                    <Product>
                        <h4>Red Apple</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Snack</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Vegetables</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Strawberry</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Black Plum</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Custard Apple</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Coffee and Tea</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Headphone</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Cake and Milk</h4>
                        <h5>25 items</h5>
                    </Product>
                    <Product>
                        <h4>Organic Kiwi</h4>
                        <h5>25 items</h5>
                    </Product>
                </ProductList>
            </Contain>
        </section>
    )
}

export default Section;