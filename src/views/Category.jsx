import React, { useState, useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";


function Category() {
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cmVrZXppQGdtYWlsLmNvbSIsInN1YiI6ImJlZjg2MjI5LTE4YmQtNGQ1Mi05M2NkLTc5NThiNThkNDU5NSIsImlhdCI6MTcwODMzNjY3MiwiZXhwIjoxNzA4Mzk2NjcyfQ.lxXxfNY5vmDr7zjRHr-nuWRKofuF0W991uMcsWJN6lw');
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchCategories(currentPage);
  }, [currentPage]);

  const fetchCategories = async (page) => {

    try {
      const response = await fetch('https://api.uzi.ishemahub.com/api/v2/category?pageNumber=${currentPage}&pageSize=4', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const categoryData = await response.json();
        console.log('Categories data:', categoryData);
        setCategories(categoryData.list);
        if (categoryData.total) {
          setTotalPages(categoryData.lastPage);
        }
      } else {
        console.log('Failed to fetch categories:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }

  };
  const handleUpdateCategory = (categoryId) => {
    console.log('Update category:', categoryId);
  };

  const handleDeleteCategory = (categoryId) => {
    console.log('Delete category:', categoryId);
  };


  return (
    <>
     <div className='float-right mr-4 mt-4'>
    <button class=" bg-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+ Add Category</button>
    </div>
      <div className="container flex items-center">
        <div className="">
          <div>
            <h1 className="text-center font-sembold"> Categories</h1>
            <table className=' ml-4 mt-4' >
              <thead>
                <tr>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Name</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Description</th>
                  

                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Created At</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Updated At</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                  <th class="px-1 py-2 border-b-2 border-gray-300"></th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {categories && categories.map((category) => (
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm leading-5 text-gray-800">{category.id}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">{category.name}</div>
                    </td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{category.description}</td>
                    <td class="px-1 py-2 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{category.status}</td>
                    <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      {category.created_at}
                    </td>
                    <td class="px-1 py-2 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      {category.updated_at}
                    </td>
                    <td class=" px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <button onClick={() => handleUpdateCategory(category.id)}>
                        <CiEdit size={25} className=' text-red-300' />
                      </button>
                      <button onClick={() => handleDeleteCategory(category.id)}>
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

export default Category
