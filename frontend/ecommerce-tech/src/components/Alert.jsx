import Swal from "sweetalert2";

const Alert = (title, text, html, icon, confirmButtonText ) => {
  Swal.fire({
    title,
    text,
    html,
    icon,
    confirmButtonText,
    confirmButtonColor: "#333BF4",
    customClass: {
      title: "text-xl",
      text: "text-sm",
      html: "text-sm",
      confirmButton: "w-[360px] h-[42px] rounded-3xl",
    },
  });
};

export default Alert;
