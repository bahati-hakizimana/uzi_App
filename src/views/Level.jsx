import React, {useState, useEffect} from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function Level() {
  const [token, setToken]  = useState('');
  const [levels,setLevels]  = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPages,setTotalPages]   = useState(1);
  

 
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchLevels(1, storedToken); 
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchLevels(currentPage, token); 
    }
  }, [currentPage, token]);

  const fetchLevels = async (page, token) =>{
    try{
      const response = await fetch(`https://api.uzi.ishemahub.com/api/v2/level?pageNumber=${currentPage}&pageSize=4`,{
        method:'GET',
        headers:{
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.ok){
        const levelData = await response.json();
        console.log('Levels Data', levelData);
        setLevels(levelData.list);
        if(levelData.total){
          setTotalPages(levelData.lastpage);
        }


      }else{
        console.log('error displaying levels');
      }
    }catch{}
  };

  const handleUpdateLevel = (levelId) => {
    console.log('Update level:', levelId);
  };

  const handleDeleteLevel = (levelId) => {
    console.log('Delete level:', levelId);
  };
  return (
    <>
    <div className='float-right mr-4 mt-4'>
      <button class=" bg-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Level</button>
    </div>

    <div className="container flex items-center">
      <div className="">
        <div>
          <h1 className="text-center font-sembold">Levels</h1>
          <table className=' ml-4 mt-4' >
            <thead>
              <tr>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                {/* <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Icon</th> */}
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Description</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">question_number</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created_At</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Updated_At</th>
                <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {levels && levels.map((level) => (
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">{level.id}</div>
                      </div>
                      <div>
                        {/* <div class="text-sm leading-5 text-gray-800 w-4 h-4">
                          <img src={answer.icon} alt="icon" />
                        </div> */}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">{level.name}</div>
                  </td>
                  
                   <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {level.description}
                  </td> 
                  <td class="px-1 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{level.question_number}</td>
                  <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {level.status}
                  </td>
                  <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {level.created_at}
                  </td>
                  <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    {level.updated_at}
                  </td>
                  <td class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button onClick={() => handleUpdateLevel(level.id)}>
                      <CiEdit size={25} className=' text-red-300' />
                    </button>
                    <button onClick={() => handleDeleteLevel(level.id)}>
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

export default Level
