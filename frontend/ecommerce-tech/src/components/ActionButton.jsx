
const ActionButton = ({text, action, type, disabled}) => {
  const colors = disabled ? {
    bg : "bg-gray-500",
    text: "text-white",
    border: "border-gray-500",
    hoverBg: "bg-gray-500",
    hoverBorder: "border-gray-500"
  } :{
    bg : "bg-blue-700",
    text: "text-white",
    border: "border-blue-700",
    hoverBg: "bg-blue-500",
    hoverBorder: "border-blue-500"
  }

  return (
    <button
    className={`w-[360px] h-[42px] ${colors.bg} ${colors.text} text-xl font-semibold py-2 px-4 rounded-lg border ${colors.border} hover:${colors.hoverBg} hover:${colors.hoverBorder}  hover:border`}
    onClick={action} type={type} disabled={disabled}
  >
    {text}
  </button>
  )
}

export default ActionButton