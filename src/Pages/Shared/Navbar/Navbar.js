import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductOption from '../ProductBanner/ProductOption/ProductOption';

const Navbar = () => {
    // const [ProductOptions, setProductOption] = useState();

    // useEffect(() => {
    //     fetch(`ProductOptions.json`)
    //         .then(res => res.json())
    //         .then(data => setProductOption(data))
    // }, [])


    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <Link to='/category'>
                Category
            </Link>
            <ul className="p-2 bg-base-100">

                {/* <li><Link to='/adventure'>Adventure</Link></li>
                <li><Link to='/history'>History</Link></li>
                <li><Link to='/romance'>Romance</Link></li> */}
            </ul>
        </li>
        <li><Link to='/about'>About</Link></li>
        {/* {user?.uid ?
        <> */}
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {/* <li><button onClick={handleLogOut}>Sign Out</button></li> */}
        {/* </> */}
        : <li><Link to='/login'>Login</Link></li>
        {/* } */}
    </React.Fragment>
    return (
        <div className="navbar flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Chaffer resale</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;