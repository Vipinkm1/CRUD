import React, { useState } from 'react'

const Crude = () => {
  const [add, setAdd] = useState([])
  const [popup, setPopup] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: ''
  })

  //  add the element
  const addElement = () => {
    setPopup(true)
  }
  const handleform = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //  handle Edit
  const handleEdit = () => {
      setPopup(true)
  }
  //  handle Delete option 
const handleDelete = () => {

}
  //  submit the form 
  const handleSubmit = (e) => {
    e.preventDefault()
    setAdd((prevState) => [
      ...prevState,
      {
        ...form, id: prevState.length + 1
      }
    ])
    console.log(form)
    setPopup(false)
    setForm(form)
  }
  
  return (
    <>
      <div className='home-page'>
        <button className='add-list' onClick={addElement}>Add List</button>
        <div className='border-1'>
          <div className='list-item'>
            <div>Id</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Action</div>
          </div>
          {add.map((item, id) => (
            <div className='list-item' key={id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.number}</div>
              <div>
                <span onClick={handleEdit}>Edit</span>
                <span className='left'onClick={handleDelete} on>Delete</span>
              </div>
            </div>
          ))}
          {popup && (
            <div className='popup'>
              <form onSubmit={handleSubmit} >
                <div className='border-2'>
                  <div className='input-element'>
                    <div>Name:</div>
                    <input className='input-width' type='text' name='name' value={form.name} onChange={handleform} />
                  </div>
                  <div className='input-element'>
                    <div>Email:</div>
                    <input className='input-width' type='text' name='email' value={form.email} onChange={handleform} />
                  </div>
                  <div className='input-element'>
                    <div>Number:</div>
                    <input className='input-width' type='number' name='number' value={form.number} onChange={handleform} />
                  </div>
                  <div className='btn'>
                    <button type='submit' className='add-list btna1'>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Crude