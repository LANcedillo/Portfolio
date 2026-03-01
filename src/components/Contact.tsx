import { useState } from 'react';

export const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Aquí puedes conectar con Formspree (reemplaza 'tu_id')
    fetch("https://formspree.io/f/mnjbylbn", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      setStatus("¡Mensaje enviado con éxito!");
      form.reset();
    });
  };

  return (
    <section id="contacto" className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-inner">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Envíame un mensaje</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Nombre</label>
            <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl border-0 bg-white dark:bg-slate-800 focus:ring-2 ring-blue-500 outline-hidden transition-all dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Email</label>
            <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border-0 bg-white dark:bg-slate-800 focus:ring-2 ring-blue-500 outline-hidden transition-all dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-slate-300">Mensaje</label>
            <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border-0 bg-white dark:bg-slate-800 focus:ring-2 ring-blue-500 outline-hidden transition-all dark:text-white"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95">
            Enviar Mensaje
          </button>
          {status && (
  <div className="mt-4 p-4 rounded-xl bg-green-500/20 text-green-500 border border-green-500/50 animate-bounce text-center font-bold">
    {status}
  </div>
)}
        </form>
      </div>
    </section>
  );
};