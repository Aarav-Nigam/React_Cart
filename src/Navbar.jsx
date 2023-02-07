import logo from './logo.svg';
function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="bg-white shadow rounded navbar-brand" href="/">
          <img src={logo} alt="" width="60" height="60" />Pirates Phones
        </a>
        <button className="bg-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item bg-white rounded m-2">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item bg-white rounded m-2">
              <a className="nav-link" href="https://www.amazon.in/mobile-phones/b?ie=UTF8&node=1389401031">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;