import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageCircle, AlertTriangle } from 'lucide-react';
import { contactData } from '../data/mock';

const ContactSection = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/OwnerCaesar', '_blank');
  };

  return (
    <div className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
            📞 КОНТАКТЫ 2025
          </h2>

          {/* Main Contact Card */}
          <div className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-2xl p-8 mb-8 hover:border-red-400 transition-all duration-300 hover:bg-black/40">
            <div className="flex flex-col items-center space-y-6">
              {/* Telegram Contact */}
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Telegram:</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {contactData.telegram}
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <Button
                onClick={handleTelegramClick}
                size="lg"
                className="bg-blue-600/80 hover:bg-blue-700/90 backdrop-blur-md text-white font-bold py-4 px-8 text-xl rounded-lg transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                СВЯЗАТЬСЯ СЕЙЧАС
              </Button>
            </div>
          </div>

          {/* Warning Badge */}
          <div className="flex justify-center">
            <Badge 
              variant="outline" 
              className="text-yellow-400 border-yellow-500 px-4 py-2 text-base bg-yellow-900/20 backdrop-blur-md"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              ⚠️ {contactData.warning}
            </Badge>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-gray-400 text-sm space-y-2">
            <p>• Быстрая поддержка 24/7</p>
            <p>• Помощь с установкой и настройкой</p>
            <p>• Консультация по выбору тарифа</p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default ContactSection;