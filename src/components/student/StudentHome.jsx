import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentNavbar from "./StudentNavbar"
import SearchBar from '../SearchBar';
import LearningPath from '../LearningPath';
import ClassroomList from '../teacher/ClassroomList';
import { useNavigate, useParams } from 'react-router-dom';


const StudentHomePage = () => {
  const [page, setPage] = useState('home');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {stdid} = useParams();
  const [isAuthorized, setIsAuthorized] = useState("");
  // console.log(stdid);

  // useEffect(() => {
  //   async function getData() {
  //     setAllEmployee(
  //       (await axios.post(`https://sih-2024-5.onrender.com//mcq`), {

  //       })
  //     );
  //   }
  //   getData();
  // }, []);

  const [classrooms] = useState([
    { id: 1, name: 'Math 101', description: 'Basic Mathematics' },
    { id: 2, name: 'Science 101', description: 'Introduction to Science' },
  ]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleTakeQuiz = (classroomId) => {
    alert(`Starting quiz for classroom ${classroomId}`);
  };

  const handleSubmit = () => {
    navigate(`/student/${stdid}`)  
  }

  return (
    <div>
      <StudentNavbar setPage={setPage} />
      <div className="container mx-auto p-8">
        {page === 'home' && (
          <>
            <SearchBar onSearch={handleSearch} />
            {query && <LearningPath query={query} />}
            <ClassroomList classrooms={classrooms} onTakeQuiz={handleTakeQuiz} />
          </>
        )}
        {/* Additional page content based on 'page' state */}
      </div>
    </div>
  );
};

export default StudentHomePage;


