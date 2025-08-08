import React from 'react';
import { Separator } from './ui/separator';
import { MessageCircle, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleTelegramClick = () => {
    window.open('https://t.me/OwnerCaesar', '_blank');
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-4">
              <span className="text-red-500">CAESAR SOFT</span>
              <span className="text-white"> 2025</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональное программное обеспечение нового поколения
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400 font-semibold">100% Безопасность</span>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4 text-red-400">Связь</h4>
            <button
              onClick={handleTelegramClick}
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">@OwnerCaesar</span>
            </button>
            <p className="text-gray-500 text-xs">
              Поддержка 24/7
            </p>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-6" />

        {/* Bottom Footer */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Caesar Soft. Все права защищены.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Версия 3.9v</span>
              <Separator orientation="vertical" className="h-4 bg-gray-700" />
              <span>2025 Edition</span>
              <Separator orientation="vertical" className="h-4 bg-gray-700" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>

        {/* Final Warning */}
        <div className="mt-8 text-center">
          <p className="text-yellow-400 text-xs animate-pulse">
            ⚠️ Используйте программное обеспечение ответственно
          </p>
        </div>
      </div>

      {/* Animated Background Effects */}
      <div className="absolute bottom-10 left-10 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
    </footer>
  );
};

export default Footer;