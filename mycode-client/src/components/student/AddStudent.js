import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import"./AddStudent.css";

const AddStudent = () => {
    let navigate = useNavigate();
    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        email: "",
        department: ""
    });

    const { firstname, lastname, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const saveStudent = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/students",student);
        navigate("/view-students");
    }

    return (
        <div className='col-sm-8 py-2 px-5 mx-auto my-2'>
            <div className='card shadow p-5 form'> 
            <h2 className='text-center'>Add Student</h2>
                <form onSubmit={(e)=> saveStudent(e)} >
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
};

export default AddStudent;
