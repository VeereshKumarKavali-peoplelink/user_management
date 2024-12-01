import './index.css'

import Header from '../Header'

import Sidebar from '../Sidebar';

const About = () => (
    <>

        <div className="home-container">
            <Header />
            <div className="home-body">
                <aside className="sidebar">
                    <Sidebar />
                </aside>
                <main className="content">
                    <div className="about-container">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
                            alt="about"
                            className="about-img"
                        />
                        <h1 className="about-heading">About</h1>
                        <p className="about-paragraph">All about Blogs of frontend developers</p>
                    </div>
                </main>
            </div>
        </div>


    </>

)

export default About
