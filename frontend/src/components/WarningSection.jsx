import React from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle, Shield, Smartphone } from 'lucide-react';

const WarningSection = () => {
  return (
    <div className="py-16 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Warning Block */}
        <div className="max-w-4xl mx-auto mb-8">
          <Alert className="bg-red-900/30 border-red-500 border-2 p-6">
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

        {/* Technical Requirements */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Технические особенности:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-green-400">Безопасность</span>
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Анимация красного мигающего текста</li>
                <li>• Полупрозрачный чёрный фон</li>
                <li>• Автоматическое затемнение при скролле</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-400">Требования</span>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="text-yellow-400 font-semibold">
                  ⚠️ Версия 2025 требует Android 9.0+
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <Alert className="bg-gray-800/50 border-gray-600">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <AlertDescription className="text-gray-300">
              <div className="text-center text-sm">
                <p className="mb-2">
                  Данное программное обеспечение предназначено исключительно для образовательных целей.
                </p>
                <p className="text-yellow-400 font-semibold">
                  Использование читов может нарушать правила игр и приводить к блокировке аккаунтов.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default WarningSection;