
import Header from '../Header'
import './index.css'; 
import Sidebar from '../Sidebar';
import RoleCreationPage from '../RoleCreationPage';

const HomePage = () => {
    const userRole = JSON.parse(localStorage.getItem('userRole'));
    const userName = JSON.parse(localStorage.getItem("userName"));


    return (
        <div className="home-container">
            <Header/>
            <div className="home-body">
                <aside className="sidebar">
                    <Sidebar/>
                </aside>
                <main className="content">
                    <h2>User Info</h2>
                    <p>Username: {userName}</p>
                    <p>Role: {userRole}</p>

                    {userRole === "admin" ? <RoleCreationPage/>: <p>"your an user,dont have access to create another user"</p>}
                </main>
            </div>
        </div>
    );
};

export default HomePage;
