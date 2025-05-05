import { Link, NavLink } from 'react-router-dom'

const highlightActiveNav = (isActive) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`

function Header() {
    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        {/* the following has the link to the home page */}
                        <Link to="/" className="flex items-center">
                            <img
                                // src="https://cdn.pixabay.com/photo/2024/05/23/07/17/woman-8782450_1280.jpg"
                                src="/banner_logo.png"
                                className="mr-2 h-12"
                                alt="Logo"
                            />
                        </Link>

                        {/* List out your subroutes */}
                        <div className="" id="mobile-menu-2">
                            <ul className="">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={highlightActiveNav}
                                        >
                                            Home
                                        </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;