import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const MainLayout = () => {
    return (
        <div className='bg-base-200'>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className=' container mx-auto'>

                <Outlet></Outlet>
            </main>
            <ToastContainer position="top-right" autoClose={2000} />

            <footer>
                <Footer></Footer>
            </footer>



        </div>
    );
};

export default MainLayout;