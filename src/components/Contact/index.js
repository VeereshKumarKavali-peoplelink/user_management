import './index.css'
import Header from '../Header';
import Sidebar from '../Sidebar';



const Contact = () => (
    <>

        <div className="home-container">
            <Header />
            <div className="home-body">
                <aside className="sidebar">
                    <Sidebar />
                </aside>
                <main className="content">
                    <div className="contact-container">
                        <img
                            src="https://res.cloudinary.com/dxgomsuxu/image/upload/v1730906966/contact-blog-img_jqc2tk.png"
                            alt="contact"
                            className="contact-img"
                        />
                        <h1 className="contact-heading">Contact</h1>
                    </div>

                </main>
            </div>
        </div>


    </>

)

export default Contact