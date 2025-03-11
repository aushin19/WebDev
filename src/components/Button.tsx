type btn = {
  label: string, 
  onClick: ()=>void, 
  disabled: boolean
}

const Button = ({label, onClick, disabled}: btn) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button