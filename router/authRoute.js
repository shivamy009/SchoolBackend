const express=require('express');
const { adminSignup, adminSignin, getAdmin } = require('../controller/admin');
const { registerStudent, studentLogin, getStudent, getStudentDetails, deletestudentByclass, deleteManystudent, deleteStudent, updateStudent, updateExamresult, studentAttendance, clearAllStudentsAttendanceBySubject, clearAllStudentsAttendance, removeStudentAttendanceBySubject, removeStudentAttendance } = require('../controller/student');
const { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeachersByClass, deleteTeacher, updateTeacherSubject, teacherAttendance } = require('../controller/teacher');
const { createNotice, listNotice, deleteNotice, deleteAllnotices, updateNotice } = require('../controller/notice');
const { createComplain, complainList } = require('../controller/complain');
const { createClass, sclassList, getSclassDetail, getsclassStudent, deleteSclassess, deleteClass } = require('../controller/class');
const { subjectCreate, allSubjects, classSubjects, freeSubjectList, getSubjectDetail, deleteSubject, deleteSubjects, deleteSubjectsByClass } = require('../controller/subject');

const router=express.Router();

router.post('/AdminReg',adminSignup)
router.post('/AdminLogin',adminSignin)
router.get('/Admin/:id',getAdmin)

//student
router.post('/StudentReg', registerStudent);
router.post('/StudentLogin', studentLogin)

router.get("/Students/:id", getStudent)
router.get("/Student/:id", getStudentDetails)

router.delete("/Students/:id", deleteManystudent)
router.delete("/StudentsClass/:id", deletestudentByclass)
router.delete("/Student/:id", deleteStudent)

router.put("/Student/:id", updateStudent)

router.put('/UpdateExamResult/:id', updateExamresult)

router.put('/StudentAttendance/:id', studentAttendance)

router.put('/RemoveAllStudentsSubAtten/:id', clearAllStudentsAttendanceBySubject);
router.put('/RemoveAllStudentsAtten/:id', clearAllStudentsAttendance);

router.put('/RemoveStudentSubAtten/:id', removeStudentAttendanceBySubject);
router.put('/RemoveStudentAtten/:id', removeStudentAttendance)

//teahcher
router.post('/TeacherReg', teacherRegister);
router.post('/TeacherLogin', teacherLogIn)

router.get("/Teachers/:id", getTeachers)
router.get("/Teacher/:id", getTeacherDetail)

router.delete("/Teachers/:id", deleteTeachers)
router.delete("/TeachersClass/:id", deleteTeachersByClass)
router.delete("/Teacher/:id", deleteTeacher)

router.put("/TeacherSubject", updateTeacherSubject)

router.post('/TeacherAttendance/:id', teacherAttendance)

// Notice

router.post('/NoticeCreate', createNotice);

router.get('/NoticeList/:id', listNotice);

router.delete("/Notices/:id", deleteAllnotices)
router.delete("/Notice/:id", deleteNotice)

router.put("/Notice/:id", updateNotice)

// / Complain

router.post('/ComplainCreate', createComplain);

router.get('/ComplainList/:id', complainList);

// Sclass

router.post('/SclassCreate', createClass);

router.get('/SclassList/:id', sclassList);
router.get("/Sclass/:id", getSclassDetail)

router.get("/Sclass/Students/:id", getsclassStudent)

router.delete("/Sclasses/:id", deleteSclassess)
router.delete("/Sclass/:id", deleteClass)

// Subject

router.post('/SubjectCreate', subjectCreate);

router.get('/AllSubjects/:id', allSubjects);
router.get('/ClassSubjects/:id', classSubjects);
router.get('/FreeSubjectList/:id', freeSubjectList);
router.get("/Subject/:id", getSubjectDetail)

router.delete("/Subject/:id", deleteSubject)
router.delete("/Subjects/:id", deleteSubjects)
router.delete("/SubjectsClass/:id", deleteSubjectsByClass)



module.exports=router;