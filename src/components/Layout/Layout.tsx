import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UpdatesBanner from './UpdatesBanner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <UpdatesBanner />
      <Header />
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}