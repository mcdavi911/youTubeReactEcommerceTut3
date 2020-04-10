import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { Store } from '../Store'
//import SearchInput from './SearchInput'
import {setSearchTerm, setSearchResults} from '../actions/Action'


export default function Navbar() {
  const { state, dispatch } = React.useContext(Store);

  //const [searchTerm, setSearchTerm] = React.useState('')
  //const [searchResults, setSearchResults] = React.useState([])

  const handleChange = e => {
    //console.log(e.target.value)
    
    setSearchTerm(dispatch, e.target.value.toLowerCase());
  };


  React.useEffect(() => {
    const searchResults = state.products.filter(p => 
      p.class.toLowerCase().includes(state.searchTerm));

      //console.log('searchRsults',searchResults);

    setSearchResults(dispatch, searchResults)
  },[state.searchTerm, state.products, dispatch]);
    

  //console.log('searchResults', state.searchResults);


  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk 
      */}
      <Link to='/'>
        Nodalview
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>


      <input
        type="text"
        placeholder="Search"
        value={state.searchTerm}
        onChange={handleChange}
      />


      <Link to="/cart" className="ml-auto">
        <ButtonContainer >
          <i className="fas fa-cart-plus mx-1 mr-2" />
            my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`


