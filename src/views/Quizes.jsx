import React, { useState, useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const Quizes = () => {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwODM0NDAxNCwiZXhwIjoxNzA4NDA0MDE0fQ.5USe8BwcqByvnCd7Whuc6tMgbgik5xOcrWO5G-6e5uw');
  const [quizes, setQuizes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchQuizes(currentPage);
  }, [currentPage]);

  const fetchQuizes = async (page) => {
    try {
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v2/quiz?pageNumber=${currentPage}&pageSize=4`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const quizData = await response.json();
        // setQuestions(questionData.questions);
        console.log('Quizes data:', quizData);
        setQuizes(quizData.list);
        // setTotalPages(questionData.meta.totalPages);
        if (quizData.total) {
          setTotalPages(quizData.lastPage);
        }
      } else {
        console.log('Failed to fetch quizes:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching quizes:', error);
    }
  };

  const handleUpdateQuiz = (quizId) => {
    console.log('Update question:', quizId);
  };

  const handleDeleteQuiz = (quizId) => {
    console.log('Delete quiz:', quizId);
  };
  return (
    <>
      <div className='float-right mr-4 mt-4'>
        <button class=" bg-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Quiz</button>
      </div>

      <div className="container flex items-center">
        <div className="">
          <div>
            <h1 className="text-center font-sembold">Quizes</h1>
            <table className=' ml-4 mt-4' >
              <thead>
                <tr>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Level Id</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Questions</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Score</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">OutOf</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Category Id</th>

                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">User id</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300"></th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {quizes && quizes.map((quiz) => (
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm leading-5 text-gray-800">{quiz.id}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{quiz.level.id}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{quiz.questions}</div>
                    </td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{quiz.score}</td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{quiz.outOf}</td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {quiz.category.id}
                    </td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{quiz.user.id}</td>
                    <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      {quiz.created_at}
                    </td>
                    <td class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <button onClick={() => handleUpdateQuiz(quiz.id)}>
                        <CiEdit size={25} className=' text-red-300' />
                      </button>
                      <button onClick={() => handleDeleteQuiz(quiz.id)}>
                        <MdDeleteForever size={25} className=' text-purple-400' />
                      </button>
                    </td>
                  </tr>

                ))}


              </tbody>
            </table>
            <div className='ml-4'>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className=' text-purple-400'>{page}</button>
              ))}
            </div>
          </div>

        </div>

      </div>









    </>
  )
}

export default Quizes
