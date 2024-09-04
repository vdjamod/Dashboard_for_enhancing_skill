import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import Home from './components/Home'
import SignupForm from "./components/SignupForm";
import UploadPdf from "./components/UploadPdf";

import PageNotFound from "./utils/404PageNotFound"
import PdfUpload from "./components/PdfUpload";

import TeacherHome from "./components/teacher/TeacherHome"
// import TeacherSignup from "./components/teacher/TeacherSignup"
import TeacherLogin from "./components/teacher/TeacherLogin"
import TeacherUploadPdf from "./components/teacher/TeacherUploadPdf"
import TeacherPdfCreate from "./components/teacher/TeacherPdfCreate"


import StudentChatbot from "./components/student/StudentChatbot";
import StudentHome from "./components/student/StudentHome"
// import StudentSignup from "./components/student/StudentSignup"
import StudentLogin from "./components/student/StudentLogin"
import StudentQuiz from "./components/student/StudentQuiz"
import StudentViewVideo from "./components/student/StudentViewVideo"
import StudentViewPdf from "./components/student/StudentViewPdf"
import LearningProgress from "./components/LearningProgress";


// For test future Delete
import QuizPage from "./components/QuizPage";
import Dashboard from "./components/student/Dashboard";


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/upload" element={<UploadPdf />} />

          {/* <Route path="/upload" element={<PdfUpload />} /> */}
          
          {/* Teacher */}
          <Route path="/teacher/:tchrid" element={<TeacherHome />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />
          {/* <Route path="/signup/teacher" element={<TeacherSignup />} /> */}
          <Route path="/teacher/:tchrid/upload" element={<TeacherUploadPdf />} />
          <Route path="/teacher/:tchrid/create-pdf" element={<TeacherPdfCreate />} />
          

          {/* Student */}
          <Route path="/login/student" element={<StudentLogin />} />
          {/* <Route path="/signup/student" element={<StudentSignup />} /> */}
          <Route path="/student/:stdid/quize" element={<StudentQuiz />}/>
          <Route path="/student/:id/video/url" element={<StudentViewVideo />} />
          <Route path="/student/:stdid/pdf" element={<StudentViewPdf />} />
          <Route path="/student/:stdid/chat" element={<StudentChatbot />} />
          <Route path="/student/:stdid" element={<StudentHome />} />
          <Route path="/student/:stdid/learning" element={<LearningProgress />} />
          <Route path="/student/:stdid/dashboard" element={<Dashboard />} />

          <Route path="/signup" element={<SignupForm />} />



          {/* For test - Future Delete */}
          <Route path="/student/:stdid/quiz/name" element={<QuizPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
