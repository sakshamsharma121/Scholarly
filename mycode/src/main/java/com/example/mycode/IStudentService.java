package com.example.mycode;

import java.util.List;

public interface IStudentService {
    Student addstudent(Student student);

    List<Student> getStudents();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);

}
