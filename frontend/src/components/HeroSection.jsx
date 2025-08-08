import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { featuresData } from '../data/mock';
import { Target, Eye, Zap, Monitor, Package } from 'lucide-react';

const iconMap = {
  target: Target,
  eye: Eye,
  zap: Zap,
  monitor: Monitor,
  package: Package
};

const HeroSection = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/OwnerCaesar', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* Blinking Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-pulse">
            <span className="text-red-500 animate-pulse">CAESAR SOFT</span>
            <span className="text-white"> 2025</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold mb-8 text-red-400">
            АБСОЛЮТНОЕ ПРЕИМУЩЕСТВО
          </p>
          
          <Badge variant="destructive" className="text-lg px-4 py-2 mb-12 animate-bounce">
            НЕВИДИМЫЙ ЧИТ 2025
          </Badge>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-400">
            🔥 ОСНОВНЫЕ ФУНКЦИИ 2025:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuresData.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div 
                  key={feature.id}
                  className="bg-gray-800/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-6 h-6 text-red-500" />
                    <span className="text-green-400 font-bold">✓</span>
                    <span className="font-semibold text-white">{feature.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-xl rounded-lg transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          >
            КУПИТЬ СЕЙЧАС
          </Button>
          <p className="text-gray-400 mt-4">
            Связаться через Telegram для покупки
          </p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
};

export default HeroSection;