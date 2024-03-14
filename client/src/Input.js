function Input (props) {
    return (
      <input {...props} className={"bg-gray-600 text-gray-300 p-2 border border-gray-700 rounded-md block "+props.className} />
    );
  }
  
  export default Input;