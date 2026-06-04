import SearchContact from "./contact/SearchContacts"
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shdow-lg ">
            <div className="container ">
                <div className="row w-100">
                    <div className="col">
                        <i className="fas fa-id-badge"></i>
                        وب اپلیکیشن مدیریت{' '}
                        <span style={{ color: "purple" }}>مخاطبین</span>
                    </div>
                    <SearchContact/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar