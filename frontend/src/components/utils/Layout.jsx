import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className="h-100">
      <div className="d-flex flex-column h-100 bg-light">
        <Nav />
        {children}
      </div>
    </div>
  )
}

export default Layout
