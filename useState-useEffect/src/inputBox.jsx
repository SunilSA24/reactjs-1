import React, {useState}from "react";

function InputBox(props) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    // Add code here
    setValue(e.target.value);
  };
  const addTaskChild = () => {
    // Add code here
    props.addTask(value);
    setValue(""); 
  };
  return (
    <div className="inputbox">
      <input type="text" onChange={handleInput} value={value}/>

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;