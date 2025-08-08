import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { pricingData } from '../data/mock';
import { Crown, Star } from 'lucide-react';

const PricingSection = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('uah');

  const handleTelegramClick = (planName) => {
    const message = `Хочу купить ${planName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/OwnerCaesar?text=${encodedMessage}`, '_blank');
  };

  const getCurrencyLabel = () => {
    switch(selectedCurrency) {
      case 'uah': return 'UAH';
      case 'usd': return 'USD';
      case 'rub': return 'RUB';
      default: return 'UAH';
    }
  };

  return (
    <div className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            💰 ТАРИФЫ 2025
          </h2>
          
          {/* Currency Selector */}
          <div className="flex justify-center space-x-2 mb-12">
            {[
              { key: 'uah', label: 'UAH' },
              { key: 'usd', label: 'USD' },
              { key: 'rub', label: 'RUB' }
            ].map(currency => (
              <Button
                key={currency.key}
                variant={selectedCurrency === currency.key ? 'destructive' : 'outline'}
                onClick={() => setSelectedCurrency(currency.key)}
                className="px-6 py-2"
              >
                {currency.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {pricingData.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative bg-gray-800/70 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.isLifetime 
                  ? 'border-yellow-500 shadow-yellow-500/30' 
                  : plan.popular 
                    ? 'border-red-500 shadow-red-500/30' 
                    : 'border-gray-700 hover:border-red-400'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1">
                  ПОПУЛЯРНЫЙ
                </Badge>
              )}
              
              {/* Lifetime Crown */}
              {plan.isLifetime && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Crown className="w-8 h-8 text-yellow-500" />
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-xl font-bold ${
                  plan.isLifetime ? 'text-yellow-400' : 'text-white'
                }`}>
                  🔹 {plan.name}
                </CardTitle>
                
                {plan.discount && (
                  <Badge variant="outline" className="w-fit mx-auto mt-2 text-green-400 border-green-400">
                    Выгода {plan.discount}
                  </Badge>
                )}
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400">✅</span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    {plan.prices[selectedCurrency]}
                  </div>
                  {selectedCurrency !== 'uah' && (
                    <div className="text-xs text-gray-500">
                      {plan.prices.uah}
                    </div>
                  )}
                </div>

                {/* Buy Button */}
                <Button
                  onClick={() => handleTelegramClick(plan.name)}
                  className={`w-full font-bold py-3 transition-all duration-300 ${
                    plan.isLifetime
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 shadow-yellow-500/30'
                      : plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-red-500/30'
                        : 'bg-gray-700 hover:bg-red-600 text-white'
                  } hover:scale-105 shadow-lg`}
                >
                  {plan.isLifetime && <Crown className="w-4 h-4 mr-2" />}
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            * Все цены указаны в эквиваленте. Точную сумму уточняйте у продавца.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;