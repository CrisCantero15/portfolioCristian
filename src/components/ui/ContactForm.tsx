import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export const ContactForm = () => {
    
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!form.current) return;

      setIsLoading(true);
      // console.log(form.current);
      
      emailjs
        .sendForm(
          import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
          import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current, 
          {
            publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            toast.success(`Formulario enviado con éxito. Pronto recibirás una respuesta ✅`);
            form.current?.reset();
            setIsLoading(false);
            console.log('Envío del formulario exitoso.');
          },
          (error) => {
            toast.error(`Error al enviar el formulario. Por favor, inténtalo de nuevo ❌`);
            setIsLoading(false);
            console.log('Error al enviar el formulario: ', error);
          },
        );
    };

    return (
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input type="text" name="title" placeholder="Título de la propuesta" className="border border-gray-400 rounded-md p-2" required />
          <input type="text" name="name" placeholder="Nombre" className="border border-gray-400 rounded-md p-2" required />
          <input type="email" name="email" placeholder="Email" className="border border-gray-400 rounded-md p-2" required />
          <textarea name="message" placeholder="Escribe aquí tu mensaje..." className="border border-gray-400 rounded-md p-2" required />
          <button
            type="submit"
            disabled={isLoading}
            className={`mx-auto flex items-center justify-center gap-2 
                        bg-amber-300 text-black font-semibold px-4 py-2 rounded-md 
                        transition-colors duration-300
                        ${isLoading ? 'cursor-not-allowed opacity-80' : 'hover:bg-amber-400 cursor-pointer'}`}
          >
            {isLoading ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </button>
        </form>
      </div>
    );
};