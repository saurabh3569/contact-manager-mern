import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ContactList = () => {

  const [posts, setPosts] = useState([])


  
  useEffect(() => {
    axios.get("http://localhost:5000/get-phone")
    .then(res => setPosts(res.data))
    }, [])

    

  const handleClick = (id) => {
    axios.delete(`http://localhost:5000/delete-phone/${id}`)
    .then(res => setPosts(res.data))
    window.location.reload(false);

    alert('deleted')
  }
  

  return (<>
        <h1 className='mt-3'>Contact List</h1>
    <div className='container w-75 mt-4'>
      <table className="table mt-3">
  <thead className='table-primary'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>

  <tbody>
  {posts.map((user,key) => (
    <tr key={user._id}>
      <th scope="row" >{key+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.number}</td>
      <td>
      <button className='btn btn-danger mx-2' onClick={() => handleClick(user._id)}><i className="fa-solid fa-trash"></i></button></td>
    </tr> 
  ))}
  </tbody>
</table>

    </div>
    </>
  )
}

export default ContactList
