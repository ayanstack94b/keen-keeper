import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>



        </div>
    );
};

export default MainLayout;