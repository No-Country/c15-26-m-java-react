
const ActionButton = ({text, action, type}) => {
  return (
    <button
    className="w-[360px] h-[42px] bg-blue-700 text-white text-xl font-semibold py-2 px-4 rounded-lg mt-16 ml-3 border border-blue-700 hover:bg-blue-500 hover:border-blue-500  hover:border "
    onClick={action} type={type}
  >
    {text}
  </button>
  )
}

export default ActionButton