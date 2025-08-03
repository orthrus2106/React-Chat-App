const Layout = ({ children }) => {
    return (
        <div className="min-vh-100 d-flex flex-column">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
            <a href="/" className="navbar-brand">Hexlet Chat</a>
            </div>
        </nav>
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
            {children}
        </main>
        </div>
    )
}

export default Layout