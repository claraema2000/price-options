import { useState } from "react";
import Link from "../Link/Link";
import { TfiMenuAlt, TfiClose } from 'react-icons/tfi';

const NavBar = () => {
    const[open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '*', name: 'NotFound' },
      ];

      
    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <TfiClose></TfiClose>
                    : <TfiMenuAlt className="text-2xl"></TfiMenuAlt>
                }
                
            </div>
            <ul className="md:flex gap-20">
               {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            } 
            </ul>
            
        </nav>
    );
};

export default NavBar;