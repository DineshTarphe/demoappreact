import {Link} from 'react-router-dom';

function Menu(){
    return(
        <>
            <nav>
                <ul>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                </ul>    
            </nav>
        </>
    )
}

export default Menu;