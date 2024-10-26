import React, { useEffect, useState } from 'react';
import axios from "axios";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const StudentsView = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const result = await axios.get("http://localhost:8080/students", {
                validateStatus: () => true
            });
            if (result.status === 302) {
                setStudents(result.data);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/students/delete/${id}`);
        loadStudents(); // Reload students after deletion
    };

    return (
        <section>
            <Search search={search} setSearch={setSearch} />
            <table className='table table-bordered table-hover shadow CustomTable'>
                <thead>
                    <tr className='text-center'>
                        <th className='CustomTable'>ID</th>
                        <th className='CustomTable'>First Name</th>
                        <th className='CustomTable'>Last Name</th>
                        <th className='CustomTable'>Email</th>
                        <th className='CustomTable'>Department</th>
                        <th colSpan="3" className='CustomTable'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {students
                        .filter((st) => st.firstname.toLowerCase().includes(search))
                        .map((student, index) => (
                            <tr key={student.id}>
                                <th scope="row" className='CustomTable'>{index + 1}</th>
                                <td className='CustomTable'>{student.firstname}</td>
                                <td className='CustomTable'>{student.lastname}</td>
                                <td className='CustomTable'>{student.email}</td>
                                <td className='CustomTable'>{student.department}</td>
                                <td className='mx-2 CustomTable'>
                                    <Link to={`/student-profile/${student.id}`} className='btn btn-info'>
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className='mx-2 CustomTable'>
                                    <Link to={`/edit-student/${student.id}`} className='btn btn-warning'>
                                        <FaEdit />
                                    </Link>
                                </td>
                                <td className='mx-2 CustomTable'>
                                    <button className='btn btn-danger' onClick={() => handleDelete(student.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
};

export default StudentsView;
