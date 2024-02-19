import React,{useState,useEffect} from'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function Answer() {
  const [token,setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwODM0NDAxNCwiZXhwIjoxNzA4NDA0MDE0fQ.5USe8BwcqByvnCd7Whuc6tMgbgik5xOcrWO5G-6e5uw');
  const [answers,setAnswers] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotaPages]    = useState(1);

  useEffect(()=>{
    fetchAnswers(currentPage);
  }, [currentPage]);
  const fetchAnswers = async (page) =>{
    try{
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v2/answer?pageNumber=${currentPage}&pageSize=4`,{
        method:'GET',
        headers:{
          Authorization: `Bearer ${token}`,
        }

      });
      if(response.ok){
        const answerData = await response.json();
        console.log('Answers Data', answerData);
        setAnswers(answerData.list);

        if(answerData.total){
          setTotaPages(answerData.lastPage);
        }
      }else{
        console.log('Erro fetching Answers');
      }
    }catch{}
  };
  const handleUpdateAnswer = (answerId) => {
    console.log('Update question:', answerId);
  };

  const handleDeleteAnswer = (answerId) => {
    console.log('Delete answer:', answerId);
  };
  return (
    <>
    <div className='float-right mr-4 mt-4'>
      <button class=" bg-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Answer</button>
    </div>

    <div className="container flex items-center">
      <div className="">
        <div>
          <h1 className="text-center font-sembold">Answers</h1>
          <table className=' ml-4 mt-4' >
            <thead>
              <tr>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                {/* <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Icon</th> */}
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Title</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Questions_id</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Category_id</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created_At</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Updated_At</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                <th class="px-1 py-2 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {answers && answers.map((answer) => (
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">{answer.id}</div>
                      </div>
                      <div>
                        {/* <div class="text-sm leading-5 text-gray-800 w-4 h-4">
                          <img src={answer.icon} alt="icon" />
                        </div> */}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">{answer.title}</div>
                  </td>
                  
                   <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {answer.question.id}
                  </td> 
                  <td class="px-1 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{answer.category.id}</td>
                  <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {answer.created_at}
                  </td>
                  <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {answer.updated_at}
                  </td>
                  <td class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button onClick={() => handleUpdateAnswer(answer.id)}>
                      <CiEdit size={25} className=' text-red-300' />
                    </button>
                    <button onClick={() => handleDeleteAnswer(answer.id)}>
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

export default Answer
