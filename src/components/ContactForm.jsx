import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    
    const form = useRef();
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState('');

    // const handleModalStatus = (open) => {
    //   setIsModalOpen(open)
    // }

    const sendEmail = (e) => {
      e.preventDefault();

      console.log(form.current);
      
      emailjs
        .sendForm(import.meta.env.PUBLIC_EMAILJS_SERVICE_ID, import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            setStatus('El envío del formulario se ha completado con éxito. Pronto recibirás una respuesta.');
            // setIsModalOpen(true);
            alert(status); // Cambiar cuando se añada un modal
            e.target.reset();
            console.log('Envío del formulario exitoso.');
          },
          (error) => {
            setStatus('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
            // setIsModalOpen(true);
            alert(status); // Cambiar cuando se añada un modal
            console.log('Error al enviar el formulario: ', error);
          },
        );
    };

    return (
      <div className="">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input type="text" name="title" placeholder="Título de la propuesta" className="border border-gray-400 rounded-md p-2" required />
          <input type="text" name="name" placeholder="Nombre" className="border border-gray-400 rounded-md p-2" required />
          <input type="email" name="email" placeholder="Email" className="border border-gray-400 rounded-md p-2" required />
          <textarea name="message" placeholder="Escribe aquí tu mensaje..." className="border border-gray-400 rounded-md p-2" required />
          <button type="submit" className="mx-auto bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer">Enviar</button>
        </form>
        {/* <FormDialog client:load message={status} isModalOpen={isModalOpen} onOpenChange={handleModalStatus} /> */}
      </div>
    );
};