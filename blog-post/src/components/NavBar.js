import "./NavBar.css";

function NavBar() {
     return (
 <nav className="nav">
 <div className="topCenter">
<ul className="topList">
<li className="topListItem">HOME</li>
<li className="topListItem">CREATE POST</li>
<li className="topListItem">USER PROFILE</li>
<li className="topListItem">LOG IN</li>
 <li className="topListItem">REGISTER</li>
</ul>
 </div>
<div className="topRight">
 <img src="" alt="" />
 <i className="fa-solid fa-magnifying-glass"></i>
</div>
</nav>
);
}

export default NavBar;