import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

let count = 0;

function Navbar({ ourFoodData }) {
    const [inputValue, setInputValue] = useState("");

    return (<>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/"}>Action</Link></li>
                                <li><Link className="dropdown-item" to={"/"}>Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to={"/"}>Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">

                        {/* <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." onInput={e => setInputValue(e.target.value)}/> */}
                        {/* <datalist id="datalistOptions">
                            {autoCompleteData(ourFoodData , inputValue).map(vl => vl)}
                        // </datalist> */}
                        {/* // <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
                        <ReactSearchAutocomplete
                            items={ourFoodData.data}
                            fuseOptions={{ keys: ["name"]}}
                            resultStringKeyName="name"
                            maxResults="6"
                            placeholder="Serch your product here..."
                            // onSearch={handleOnSearch}
                            // onHover={handleOnHover}
                            // onSelect={handleOnSelect}
                            // onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                        />
    </>
    )
}

const formatResult = (item) => {
    return (
      <dl>
        <dt>{item.name}</dt>
        <dd>{item.dsc}</dd>
      </dl>
    )
  }
const formatResultcd = (item) => {
    return (
        <span>{item.country}</span>
    )
  }

// const autoCompleteData = (ourFoodData, inputValue) => {
//     return ourFoodData.loading ? "Loading..." :
//         getData(ourFoodData.data, inputValue)
// }

// const getData = (data, inputValue) => {
//     let sData = getNameData(data, inputValue);
//     let cd = sData[1].slice(0, 3);
//     let len = 6 - cd.length;
//     let da = sData[0].slice(0, len);

//     return [da, cd];
// }

// const getNameData = (data, inputValue) => {
//     console.log("inpout", inputValue);
//     let name = [];
//     let country = [];
//     data.map(dt => {
//         if (dt.name.includes(inputValue)) {
//             name.push(<option value={dt.name}>{dt.name}</option>)
//         }
//         if (dt.country.includes(inputValue)) {
//             country.push(<option value={dt.country}>{dt.country}</option>)
//         }
//         return null;
//     })
//     return [name, country];
// }

// const getCountryData = (data, inputValue) => {
//     return data.map(dt => {
//         if(dt.name.includes(inputValue)){
//             return <option value={dt.name}>{dt.name}</option>
//         }
//         return null
//     })
// }

const mapStateToProps = state => {
    return {
        ourFoodData: state.ourFood
    }
}

export default connect(mapStateToProps)(Navbar)