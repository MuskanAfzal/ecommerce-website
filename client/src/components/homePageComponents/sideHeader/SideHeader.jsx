import React from 'react'
import "./SideHeader.css"

export default function SideHeader() {
  return (
    <div className='side-header'>
      <ul className="dropdown-side-header-list">
        <li>Women's Fashion <img src="/icons8-arrow-50 (2).png" alt="arrow" className='arr'/></li>
        <li>Men's Fashion  <img src="/icons8-arrow-50 (2).png" alt="arrow"className='arr' /></li>
      </ul>
      <ul className="side-header-list">
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
    
  )
}
