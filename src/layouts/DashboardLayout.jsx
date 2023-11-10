import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex">
            <div className="w-[20%] bg-red-300 rounded-lg">
                <ul className="space-y-4 ml-10 text-2xl p-5 underline">
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/editProfile'}>Edit Profile</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;