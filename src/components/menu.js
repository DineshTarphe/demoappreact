import {Link} from 'react-router-dom';

function Menu(){
    return(
        <>
            <nav>
                <ul>
                <Link path="">About</Link>
                <Link path="">Gallery</Link>
                <Link path="">Projects</Link>
                <Link path="">Contact</Link>
                </ul>    
            </nav>
        </>
    )
}

export default Menu;