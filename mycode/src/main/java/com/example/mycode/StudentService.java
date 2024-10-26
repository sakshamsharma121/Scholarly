package com.example.mycode;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService{
    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student addstudent(Student student) {
        if (studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsException(student.getEmail() + "already exists!");
        }
        return studentRepository.save(student);
    }

    

    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Sorry, student not found");
        }
        studentRepository.deleteById(id);
        
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
        .orElseThrow(() -> new StudentNotFoundException("Sorry, no student found with the id :" +id));
    }

  

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map( st ->{
            st.setFirstname(student.getFirstname());
            st.setLastname(student.getLastname());
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());

            return studentRepository.save(st);
        }).orElseThrow(() -> new StudentNotFoundException ("Sorry, this student could not be found"));
    }


    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
    
    
}
