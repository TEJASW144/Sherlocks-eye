function Textarea (props) {
    return (
      <textarea {...props} className={"bg-gray-600 text-gray-300 p-2 border border-gray-700 rounded-md block "+props.className} />
    );
  }
  
  export default Textarea;