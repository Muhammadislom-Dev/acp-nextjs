import React from "react";
import { toast } from "react-toastify";

function Button({ numberValue, nameValue, textValue, handleClear }) {
  let bot = {
    TOKEN: "7002617210:AAFKnKuXP6Z8rFB7FICnMJEpd-uJPBjp-aU",
    chatID: "-1002057999982",
    message: `
        Assalomu alaykum sizga yangi xabar!%0A
        %0AIsmi 👤: ${nameValue}; 
        %0ATelefon raqami ☎: ${numberValue};
        %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage(e) {
    e.preventDefault();
    if (nameValue === "") {
    } else if (numberValue === "") {
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          if (success.status === 200) {
            handleClear();
          }
          window.location.reload();
          toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
          onClose();
        },
        (error) => {}
      );
    }
  }
  return (
    <button
      type="submit"
      onClick={sendMessage}
      className="w-full text-black bg-white rounded-lg h-[50px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
      Yuborish
    </button>
  );
}

export default Button;
