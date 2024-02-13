import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../views/studentpages/NavBar'
import StudentDshboard from '../views/studentpages/StudentDshboard';
import QuizLevels from '../views/studentpages/QuizLevels';
import StudentQuestions from '../views/studentpages/StudentQuestions';

const StudentLayout = () => {
  return (
    <>
      <div className="flex flex-col flex-1">
        <NavBar />

        <main className='flex items-center'>
          <Routes>
            <Route path="studentdashboard" element={<StudentDshboard />} />
            <Route path="quizelevels" element={<QuizLevels />} />
            <Route path="studentquestion" element={<StudentQuestions />} />


          </Routes>
        </main>
      </div>
    </>
  )
}

export default StudentLayout
