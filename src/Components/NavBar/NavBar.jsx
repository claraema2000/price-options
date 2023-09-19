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
        <nav className="bg-indigo-100 p-4 mt-14">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <TfiClose></TfiClose>
                    : <TfiMenuAlt className="text-2xl"></TfiMenuAlt>
                }
                
            </div>
            {/* Way of responsive in small device */}
            <ul className={`md:flex duration-1000 gap-20 absolute md:static
            ${open ? 'top-16' : '-top-60'}
            bg-indigo-100 px-3 py-1
            `}>
               {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            } 
            </ul>
            
        </nav>
    );
};

export default NavBar;