import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSaller from '../Hooks/useSaller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSaller] = useSaller(user?.email)
    const [isBuyer] = useSaller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My product</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>Users Control</Link></li>
                                {/* <li><Link to='/dashboard/adddoctor'>Add a doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li> */}


                            </>
                        }
                        {
                            isSaller && <>

                                <li><Link to='/dashboard/addproduct'>Add a product</Link></li>

                            </>

                        }
                        {
                            isBuyer && <>

                                {/* <li><Link to='/dashboard'>Myproduct</Link></li> */}

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;