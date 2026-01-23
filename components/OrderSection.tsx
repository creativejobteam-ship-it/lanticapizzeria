
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OrderSectionProps {
  onOpenOrder: (mode?: 'menu' | 'delivery_direct') => void;
}

const OrderSection: React.FC<OrderSectionProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-10 left-10 text-4xl rotate-12">🍅</div>
         <div className="absolute bottom-10 right-20 text-4xl -rotate-12">🍝</div>
         <div className="absolute top-1/2 left-20 text-4xl rotate-45">🌿</div>
         <div className="absolute top-20 right-40 text-4xl -rotate-12">🧀</div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 relative z-10 px-4">
        
        {/* Delivery Button - Triggers Platform Selection */}
        <button 
          onClick={() => onOpenOrder('delivery_direct')}
          className="group bg-black text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:bg-gray-800 transition-all shadow-lg min-w-[300px] justify-between cursor-pointer"
        >
          <div className="flex flex-col items-start pl-2">
            <span className="font-bold text-sm">Faites vous livrer</span>
            <span className="text-[10px] text-gray-400 flex gap-1">
              Uber<span className="text-white font-bold">Eats</span> • deliveroo
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowRight size={18} />
          </div>
        </button>

        {/* Commander Button - Triggers Menu Builder */}
        <button 
          onClick={() => onOpenOrder('menu')}
          className="group bg-white text-black border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:border-black transition-all shadow-lg min-w-[300px] justify-between cursor-pointer"
        >
          <div className="flex flex-col items-start pl-2">
            <span className="font-bold text-sm">Commander</span>
            <span className="text-[10px] text-gray-500">
              Livraison et réservation
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowRight size={18} />
          </div>
        </button>

      </div>
    </section>
  );
};

export default OrderSection;
