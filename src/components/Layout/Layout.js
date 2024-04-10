import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Layout = (props) => {

    return (
        <div>
            <Nav />
            <main style={{ paddingTop: '56px' }}>
                {props.children}
            </main>
            <Footer />
        </div>

    )
}

export default Layout; 