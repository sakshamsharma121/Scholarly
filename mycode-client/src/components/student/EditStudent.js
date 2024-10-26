import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import"./AddStudent.css";

const EditStudent = () => {

  let navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    department: ""
  });

  const { firstname, lastname, email, department } = student;

  useEffect(() => {
    loadStudent();
  }, []); // Ensure the effect runs when the `id` changes

  const loadStudent = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/students/student/${id}`);
      setStudent(result.data);
    } catch (error) {
      console.error("There was an error fetching the student data!", error);
    }
  };

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/students/update/${id}`, student);
      navigate("/view-students");
    } catch (error) {
      console.error("There was an error updating the student!", error);
      navigate("/view-students");
    }
  };

  return (
    <div className='col-sm-8 py-2 px-5 mx-auto my-2'>
      <div className='card shadow p-5 form'>
        <h2 className='text-center'>Edit Student</h2>
        <form onSubmit={(e)=>{updateStudent(e)}}>
          <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='firstname'>First Name</label>
            <input
              className='form-control col-sm-6'
              type='text'
              name='firstname'
              id='firstname'
              required
              value={firstname}
              onChange={handleInputChange}
            />
          </div>

          <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='lastname'>Last Name</label>
            <input
              className='form-control col-sm-6'
              type='text'
              name='lastname'
              id='lastname'
              required
              value={lastname}
              onChange={handleInputChange}
            />
          </div>

          <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='email'>Your Email</label>
            <input
              className='form-control col-sm-6'
              type='email'
              name='email'
              id='email'
              required
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className='input-group mb-5'>
            <label className='input-group-text' htmlFor='department'>Department</label>
            <input
              className='form-control col-sm-6'
              type='text'
              name='department'
              id='department'
              required
              value={department}
              onChange={handleInputChange}
            />
          </div>

          <div className='row mb-5'>
            <div className='col-sm-2'>
              <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
            </div>
            <div className='col-sm-2'>
              <Link to={"/view-students"} type='button' className='btn btn-outline-warning btn-lg'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
