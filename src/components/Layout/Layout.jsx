import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neon-bg text-neon-text overflow-x-hidden">
            <Sidebar />
            
            {/* Main Content Area */}
            <main className="md:ml-64 p-4 md:p-8 relative">
                 {/* Background Blobs */}
                 <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                 </div>

                <div className="max-w-6xl mx-auto space-y-24 pb-20">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
