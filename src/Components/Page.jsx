import React from 'react';

function Page({ children, title, showHeader = false }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      {showHeader && (
        <header className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4">{title}</h1>
          </div>
        </header>
      )}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 text-gray-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
