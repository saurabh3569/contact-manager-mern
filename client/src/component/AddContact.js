import React, { useState } from 'react'
const axios = require('axios')

const AddContact = () => {

  const [data,setData] = useState({
    name:'',
    email:'',
    number:''
  })


  const handleClick = async(e) => {
    e.preventDefault();
 

    axios.post("http://localhost:5000/add-phone", data)
            .then(res => setData(res.data))
            setData({
              name: "",
              email:"",
              number:"",
            })
  }


  const handleChange = (e) =>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

 

  return (
    <>
    
    <div className="container border border-dark w-50 my-5 rounded">
      <h1 className='mt-2'>Add Contact</h1>
      <div className='container mt-5'>
        <form>
          <div className="form-outline mb-4">
            <input name='name' type="text" placeholder='Name' id="name" value={data.name} className="form-control" onChange={handleChange} autoComplete="off"/>
          </div>

          <div className="form-outline mb-4">
            <input name='email' type="text" placeholder='Email' id="email" value={data.email} className="form-control" onChange={handleChange} autoComplete="off"/>
          </div>

          <div className="form-outline mb-4">
            <input name='number' type="text" placeholder='Phone Number' id="number" value={data.number} className="form-control" onChange={handleChange} autoComplete="off"/>
          </div>

          <button type="button" className="my-2 btn btn-success" onClick={handleClick}>Add To Contact</button>

        </form>
      </div>
    </div>
    </>
  )
}

export default AddContact
