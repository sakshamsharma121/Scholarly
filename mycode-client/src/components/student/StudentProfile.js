import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import profile from './profile.png';
import"./AddStudent.css";
import"./Profile.css";

const StudentProfile = () => {

    const { id } = useParams();


    const [student, setStudent] = useState({
        firstname: "",
        lastname: "",
        email: "",
        department: ""
    });

    useEffect(() => {
        loadStudent();
      }, []);

       const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/students/student/${id}`);
        setStudent(result.data);
     
    };


  return (
    <section className='shadow form'>
            <div className='container py-5 form'>
                <div className='row form'>
                    <div className='col-lg-3 form'>
                        <div className='card mb-4 profile'>
                            <div className='card-body text-center '>
                                <img src={profile} alt='avatar' className='rounded-circle img-fluid' style={{width:150}} />
                                <h5 className='my-3'>{`${student.firstname} ${student.lastname}`}</h5>
                                <div className='d-flex justify-content-center mb-2 profile'>
                                    <button type='button' className='btn btn-outline-primary'>Call</button>
                                    <button type='button' className='btn btn-outline-warning ms-1'>Message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-9'>
                        <div className='card mb-4 profile'>
                            <div className='card-body'>
                                <hr />

                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>
                                            First Name
                                        </h5>
                                    </div>

                                    <div className='col-sm-9'>
                                        <p className='text mb-0' >
                                            {student.firstname}
                                        </p>
                                    </div>
                                </div>
                                <hr />

                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>
                                            Last Name
                                        </h5>
                                    </div>

                                    <div className='col-sm-9'>
                                        <p className='text mb-0 '>
                                            {student.lastname}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>
                                            Email
                                        </h5>
                                    </div>

                                    <div className='col-sm-9'>
                                        <p className='text mb-0'>
                                            {student.email}
                                        </p>
                                    </div>
                                </div>

                                <hr />

                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <h5 className='mb-0'>
                                            Department
                                        </h5>
                                    </div>

                                    <div className='col-sm-9 '>
                                        <p className='text mb-0'>
                                            {student.department}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default StudentProfile
