export function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "5585999177002";
  const message = "Olá! Gostaria de tirar uma dúvida sobre os serviços da Divina Barbearia.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle drop-shadow-xl"
      aria-label="Falar no WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="size-14 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#25D366" d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.479 1.33 4.996L2 22l5.147-1.352c1.464.798 3.106 1.218 4.781 1.218 5.517 0 9.993-4.476 9.993-9.993 0-5.517-4.476-9.993-9.993-9.993z" />
        <path fill="#FFF" d="M16.835 15.854c-.265-.133-1.567-.773-1.81-.862-.243-.09-.419-.133-.594.133-.176.265-.683.862-.838 1.04-.155.176-.309.199-.574.066-.265-.133-1.119-.414-2.132-1.319-.788-.703-1.32-1.569-1.474-1.834-.155-.265-.017-.409.116-.541.12-.119.265-.309.397-.463.133-.155.176-.265.265-.441.09-.176.044-.331-.022-.463-.066-.133-.594-1.433-.815-1.963-.214-.518-.432-.447-.594-.455-.154-.007-.331-.009-.508-.009-.176 0-.463.066-.706.331-.243.265-.927.905-.927 2.207 0 1.302.949 2.56 1.082 2.737.133.176 1.866 2.849 4.522 3.996.632.272 1.125.435 1.511.558.634.202 1.211.173 1.666.105.508-.077 1.567-.64 1.787-1.258.221-.618.221-1.147.155-1.258-.066-.11-.243-.176-.508-.309z" />
      </svg>
      <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse border-2 border-background">
        1
      </span>
    </a>
  );
}
