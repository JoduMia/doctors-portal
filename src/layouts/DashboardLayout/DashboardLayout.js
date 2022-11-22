import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/shared/Header'

const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'}>My appointments</Link></li>
                        <li><Link to={'/dashboard/allusers'}>All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout