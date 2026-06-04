const SearchContact = () => {
    return (
        <div className="col">
            <div className="input-group w-75 mx-2 " dir="ltr">
                <span className="input-group-text " id="basic-addon1" style={{ backgroundColor: 'purple' }}>
                    <i className="fas fa-search"></i>
                </span>
                <input className="form-control"
                    type="text"
                    dir="rtl"
                    aria-label="search" aria-describedby="basic-addon1"
                    style={{ backgroundColor: "gray", color: 'purple' }}></input>
            </div>
        </div>
    )
}
export default SearchContact