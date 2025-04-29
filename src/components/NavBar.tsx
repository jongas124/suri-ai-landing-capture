
import React from 'react';
import { Button } from "@/components/ui/button";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c3d3bbc5-8375-4634-901d-c54482d61c8c.png" 
            alt="Suri AI Logo" 
            className="h-20 w-auto" /* Increased from h-16 to h-20 */
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#method" className="text-gray-700 hover:text-suri-500 transition-colors">Método</a>
          <a href="#benefits" className="text-gray-700 hover:text-suri-500 transition-colors">Benefícios</a>
          <a href="#register" className="text-gray-700 hover:text-suri-500 transition-colors">Inscrever-se</a>
        </div>
        <Button className="bg-suri-500 hover:bg-suri-600" size="sm">
          <a href="#register">Começar Agora</a>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
