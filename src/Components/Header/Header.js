import React,{ useContext, useState } from 'react'
import { getAuth,signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import './Header.css'
import Arrow from '../../assets/Arrow'
import OlxLogo from '../../assets/OlxLogo'
import Search from '../../assets/Search'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../store/Context'
import { SearchContext } from '../../store/SearchContext' //search

function Header() {

    const [SearchTerm, setSearchTerm] = useState('');

    const {setSearchInput} = useContext(SearchContext); //search
    const {User} = useContext(AuthContext)
    const auth = getAuth();
    const navigate = useNavigate()
    
    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div className="brandName" onClick={
                    ()=>{navigate('/')}
                }>
                    <OlxLogo/>
                </div>

               
                <div className="placeSearch">
                    <Search/>
                    <input type="text" placeholder='INDIA' />
                    <Arrow/>
                </div>
                <div className="productSearch">
                    <div className="input">
                    <input
                    type="text"
                    placeholder="Find car,mobile phone and more..."
                    onChange={(e)=>{
                        setSearchTerm(e.target.value);
                    }}
                    />
                    </div>
                    <div className="searchAction"
                    onClick={(e)=>{
                        setSearchInput(SearchTerm); //search
                        navigate('/items')
                        
                    }}>
                        <Search color="#ffffff"></Search>
                    </div>
                </div>
                <div className="laguage">
                    <span>ENGLISH</span>
                    <Arrow/>
                </div>
                <Link to={User ? `/profile/${User.uid}` : '/login'} >
                <div className="loginPage">
                    <span style={{color:'black'}}>{User ? User.displayName : 'Login'}</span>
                    <hr />
                </div>
                </Link>

                {User && <span onClick={()=>{
                    navigate('/');
                    signOut(auth);
                }} id="logout">Logout</span>}

                <div className="sellMenu"
                onClick={()=>{
                    User?
                    navigate('/category'):navigate('/login')
                    
                }}>
                    <SellButton/>
                    <div className="sellMenuContent">
                        <SellButtonPlus/>
                        <span>SELL</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header
