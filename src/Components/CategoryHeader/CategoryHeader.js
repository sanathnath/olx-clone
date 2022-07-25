import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/Arrow'
import { CategoryContext } from '../../store/CategoryContext';
import './CategoryHeader.css'


function CategoryHeader() {
    const [IsCat, setIsCat] = useState(false);
    const navigate = useNavigate()
    const {setCatgry} = useContext(CategoryContext)
    return (
        <div className='cat'>
            <div className="menuBar">
                    <div className="categoryMenu"
                    onClick={()=>{
                        setIsCat(!IsCat)
                    }}>
                        <span>ALL CATEGORIES</span>
                        <Arrow/>
                    </div>
                    <div className="otherQuickOptions">
                        <span>Cars</span>
                        <span>Motorcy...</span>
                        <span>Mobile Ph...</span>
                        <span>For Sale:Houses & Apart...</span>
                        <span>Scoot...</span>
                        <span>Commercial & Other Ve...</span>
                        <span>For Rent: House & Apart...</span>
                    </div>
                </div>
                { IsCat && <div>
        <div className="cat-main">
            <div className="cat-menu">
                <div className="cat-heading"
                onClick={()=>{
                    setCatgry('Mobile')
                    setIsCat(!IsCat);
                    navigate('/items')
                }}>
                    <h5>Mobile</h5>
                </div>
                <div className="cat-content">
                    <span>Mobile phones</span>
                </div>
                <div className="cat-content">
                    <span>Accessories</span>
                </div>
                <div className="cat-content">
                    <span>Tablets</span>
                </div>
            </div>

            <div className="cat-menu">
                <div className="cat-heading"
                onClick={()=>{
                    setCatgry('Motorcycle')
                    setIsCat(!IsCat);
                    navigate('/items')
                }}>
                    <h5>Motorcycles</h5>
                </div>
                <div className="cat-content">
                    <span>Bikes</span>
                </div>
                <div className="cat-content">
                    <span>Scooters</span>
                </div>
                <div className="cat-content">
                    <span>Accessories</span>
                </div>
            </div>

            <div className="cat-menu">
                <div className="cat-heading"
                onClick={()=>{
                    setCatgry('Cars')
                    setIsCat(!IsCat);
                    navigate('/items')
                }}>
                    <h5>Cars</h5>
                </div>
                <div className="cat-content">
                    <span>SUV</span>
                </div>
                <div className="cat-content">
                    <span>Sedan</span>
                </div>
                <div className="cat-content">
                    <span>MPV</span>
                </div>
            </div>

            <div className="cat-menu">
                <div className="cat-heading"
                onClick={()=>{
                    setCatgry('Electronics')
                    setIsCat(!IsCat);
                    navigate('/items')
                }}>
                    <h5>Electronics</h5>
                </div>
                <div className="cat-content">
                    <span>Kitchen</span>
                </div>
                <div className="cat-content">
                    <span>TV</span>
                </div>
                <div className="cat-content">
                    <span>Fridge</span>
                </div>
            </div>

            <div className="cat-menu">
                <div className="cat-heading"
                onClick={()=>{
                    setCatgry('Furniture')
                    setIsCat(!IsCat);
                    navigate('/items')
                }}>
                    <h5>Furniture</h5>
                </div>
                <div className="cat-content">
                    <span>sofa</span>
                </div>
                <div className="cat-content">
                    <span>Tables</span>
                </div>
            </div>
        </div> 
        </div>}
        </div> 
    )
}

export default CategoryHeader
