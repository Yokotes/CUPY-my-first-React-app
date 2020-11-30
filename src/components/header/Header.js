import React from 'react'
import './Header.css';
import Logo from '../core/Logo';
import MenuItem from '../core/MenuItem';

export default function Header() {
    const [menuActive, setMenuActive] = React.useState(false)
    const [items, setCurrentItem] = React.useState([
        {id: 0, isCurrent: true, path: '/works/cupy/', pageName: 'Home'},
        {id: 1, isCurrent: false, path: '/works/cupy/about', pageName: 'About'},
        {id: 2, isCurrent: false, path: '/works/cupy/faq', pageName: 'FAQ'}
    ])


    function handleClick(id) {
        setCurrentItem(()=> {
           let new_items = items.map((item)=>{
                if (item.id === id) item.isCurrent = true
                else item.isCurrent = false

                return item

            })

            return new_items
        })
    }

    return (
        <header className="header">
            <div className="container h-100">
                <div className="row h-100 justify-content-between align-items-center">

                    {/* Logo */}
                    <div className="col-auto">
                        <Logo />
                    </div>

                    {/* Menu */}
                    <div className="col-auto h-100">
                        <nav className="menu">
                            <ul className={menuActive ? 'active' : ''}>
                                {
                                    items.map((item)=>{
                                        return <MenuItem path={item.path} 
                                                        isCurrent={item.isCurrent} 
                                                        pageName={item.pageName} 
                                                        key={item.id}
                                                        id = {item.id}
                                                        onClick={handleClick}
                                                />
                                    })
                                }
                            </ul>
                            <button className="burger d-block d-lg-none" onClick={()=>setMenuActive(!menuActive)}>
                                { menuActive ? <i className="fas fa-times"></i> : <i className="fas fa-hamburger"></i>}
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
