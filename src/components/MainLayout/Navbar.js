import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Redux Example</h1>
                <div>
                    <Link to="/">Posts List</Link>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
