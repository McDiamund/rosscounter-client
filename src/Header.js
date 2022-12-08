import { Outlet, Link } from "react-router-dom";
import './css/header.css';

export default function Header() {
    return (
        <>
            <div className='nav'>
                <ul className='nav-list'>
                    <li className="about-link jb-mono"><Link to="/about">About</Link></li>
                    <li className="logo-link text-center jb-mono"><Link to="/">Ross++</Link></li>
                    <li className="support-link text-right jb-mono"><Link to="/support">Support</Link></li>
                </ul>
            </div>

            <Outlet />
        </>
    );
}