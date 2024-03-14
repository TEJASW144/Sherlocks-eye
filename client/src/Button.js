function Button(props) {
    let classNames = "border h-8 border-gray-300 rounded-full px-3 text-sm font-bold ";
    if (props.outline) {
      classNames += "text-gray-300 ";
    } else {
      classNames += "bg-gray-300 text-gray-800 ";
    }
    return (
      <button {...props} className={classNames + props.className} />
    );
  }
  
  export default Button;