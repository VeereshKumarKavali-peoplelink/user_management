
import { NavLink } from 'react-router-dom';
import './index.css'

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', path: '/' }, 
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <nav>
        {menuItems.map((item) => (
          <NavLink key={item.name} to={item.path} activeClassName="active">
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
