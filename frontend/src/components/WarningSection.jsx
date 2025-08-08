import React from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, Shield, Smartphone } from 'lucide-react';

const WarningSection = () => {
  return (
    <div className="py-16 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Warning Block */}
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-red-900/30 border-red-500 border-2 p-6 backdrop-blur-md">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <AlertDescription className="text-white">
              <div className="text-center">
                <div className="text-red-500 font-black text-2xl mb-4 animate-pulse">
                  ⚠️ ВНИМАНИЕ! ИСПОЛЬЗУЙТЕ НА СВОЙ СТРАХ И РИСК! ⚠️
                </div>
                <div className="space-y-2 text-lg">
                  <div className="text-red-400 font-bold">
                    🚫 НЕ ИСПОЛЬЗУЙТЕ НА ОСНОВНЫХ АККАУНТАХ!
                  </div>
                  <div className="text-red-400 font-bold">
                    ⚠️ МЫ НЕ НЕСЁМ ОТВЕТСТВЕННОСТЬ ЗА БАН!
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default WarningSection;