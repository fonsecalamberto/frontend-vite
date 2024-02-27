function Sidebar() {
    return (
        <aside className="flex flex-col w-56 h-screen bg-slate-900 text-gray-100 shadow-xl">
            <nav className="flex-1 p-4">
                {/* Logo or Branding */}
                <div className="flex justify-center items-center mb-6">
                    {/* Your logo here */}
                </div>

                {/* Navigation Items */}
                <ul className="flex flex-col space-y-2">
                    {/* Dashboard */}
                    <li className="flex items-center space-x-3 p-2 hover:bg-slate-700 rounded">
                        <img className="w-6 h-6" src="" alt="Dashboard" />
                        <span className="flex-1">Dashboard</span>
                    </li>

                    {/* Posts */}
                    <li className="flex items-center space-x-3 p-2 hover:bg-slate-700 rounded">
                        <img className="w-6 h-6" src="" alt="Posts" />
                        <span className="flex-1">Posts</span>
                    </li>
                </ul>

                {/* Bottom Section - Logout or Settings */}
                <div className="mt-auto">
                    {/* Logout */}
                    <div className="flex items-center space-x-3 p-2 hover:bg-slate-700 rounded">
                        <img className="w-6 h-6" src="" alt="Logout" />
                        <span className="flex-1">Logout</span>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;
