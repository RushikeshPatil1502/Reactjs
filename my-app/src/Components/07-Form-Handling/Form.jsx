import React, { useState } from 'react';

function Form() {
  const [namevalue, setNameValue] = useState('');
  const [emailValue , setEmailValue] = useState('')
  const [submittedNameValue, setSubmittedNameValue] = useState([]);

  const [formdata , setFormData] = useState({
    name: '',
    email: ''
  })

//   function handleChange(event) {
//     setNameValue(event.target.value);
//   }

//   function handleEmailChange(event){
//     const {value} = event.target

//     setEmailValue(value)
//   }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedNameValue([...submittedNameValue, {name: formdata.name , email: formdata.email}]); // Append the value
    setFormData({
        formdata: {
            name: '',
            email: ''
        }
    })
  }

  function handleFormChange(event){
    const {name , value} = event.target

    setFormData({
        ...formdata,
        [name] : value
    })
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          className="bg-white px-4 py-2 my-6 border rounded-xl"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formdata.name}
          onChange={handleFormChange}
        />
        <input 
        className="bg-white px-4 py-2 my-6 border rounded-xl"
        type="email" 
        name="email" 
        id="email"
        placeholder='Enter your email'
        value={formdata.email}
        onChange={handleFormChange} />
        <button type="submit" className="border py-2 px-4 rounded-xl ml-3">
          Add
        </button>
      </form>

      <ul>
        {submittedNameValue.map((entry, index) => (
          <div key={index}>
            <li>{entry.name}</li>
            <li>{entry.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Form;
