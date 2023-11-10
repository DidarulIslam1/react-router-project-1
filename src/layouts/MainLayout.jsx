import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";


const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation.state === 'loading');
    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7">
                <div>
                    <h1 className="text-2xl font-bold">My - eCommerce</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "bg-green-400 p-3 rounded-md" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "bg-green-400 p-3 rounded-md" : ""
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "bg-green-400 p-3 rounded-md" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;