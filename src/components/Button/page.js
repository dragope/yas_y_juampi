const Button = ({text, action}) => {
  return (
    <button
        className="cursor-pointer rounded-3xl p-[0.5rem] pl-[1.5rem] pr-[1.5rem] border bg-olive-green font-semibold text-white md:text-[1.2rem] hover:bg-white hover:text-olive-green hover-border-white"
        onClick={action}
    >
        {text}
    </button>
  )
}

export default Button