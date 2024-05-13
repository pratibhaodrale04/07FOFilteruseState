// using named export- "export keyword"--in front of the component

// export const HeaderComponent = ()=>{

import { APP_LOGO_IMG_URL } from "../utils/constants";

export const HeaderComponent = ()=>{
    return <div className="header">
        <div className="app-logo">
        <img src={APP_LOGO_IMG_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Buffet Menu</li>
                <li>Festive Menu</li>
                <li>Book Table</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

export default HeaderComponent;