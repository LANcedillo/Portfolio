import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const context = useContext(CartContext);

  if (!context) return null;
  const { cart, removeFromCart, total } = context; // Asumiendo que añadimos 'total' al context

  return (
    <>
      {/* Overlay: Fondo oscuro tras el carrito */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />

      {/* Panel del Carrito */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 z-[70] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
              <ShoppingBag size={20} /> Tu Selección
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition">
              <X size={24} className="dark:text-white" />
            </button>
          </div>

          {/* Lista de Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-slate-500">
                <p>El carrito está vacío.</p>
                <button onClick={onClose} className="mt-4 text-blue-500 font-bold underline">Seguir explorando</button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl">
                    {/* Aquí podrías poner un icono basado en el tipo de item */}
                    🎮
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-500">Cantidad: {item.quantity}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer del Carrito */}
          <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-600 dark:text-slate-400">Total estimado:</span>
              <span className="text-2xl font-black text-blue-600">${total || 0}</span>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
              Confirmar Selección
            </button>
          </div>
        </div>
      </div>
    </>
  );
};