"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function LogTable() {
  const [tableData, setTableData] = useState([]);
  useEffect(()=>{ 
    const fetchData = async () => {
      try {
        let logs = await axios.get('/api/logs');
        setTableData(logs.data.logs); 
      } catch (error) {
        console.error('Error writing data:', error);
      }
    };
    fetchData();
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { push } = useRouter()

  if (typeof window !== 'undefined') {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (!token) {
      push('/');
    }
    if (username != process.env.NEXT_PUBLIC_Administrator1 && username != process.env.NEXT_PUBLIC_Administrator2 && username != process.env.NEXT_PUBLIC_Administrator3)
      push('/');
  }

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  // Function to perform search
  const performSearch = (e) => {
    e.preventDefault();
    if (tableData.length > 0) {
      const results = tableData.filter((user) => {
        const account = user.account || '';
        return (
          account.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchResults(results);
    }
  };

  // Use searchResults if search term is entered, else use players
  const dataToDisplay = searchTerm ? searchResults : tableData;
  const sortedPlayers = dataToDisplay.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  // Logic to calculate the total number of pages
  const totalPages = Math.ceil(sortedPlayers.length / itemsPerPage);
  

  // Get current items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataToDisplay.slice(indexOfFirstItem, indexOfLastItem);
 

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden min-h-[350px]">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
          <form className="flex items-center" onChange={performSearch}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by Login ID or Email Address"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
          </form>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">NO</th>
              <th scope="col" className="px-4 py-3">Time and Date</th>
              <th scope="col" className="px-4 py-3">Account ID</th>
              <th scope="col" className="px-4 py-3">Point Change</th>
              <th scope="col" className="px-4 py-3">Points Before</th>
              <th scope="col" className="px-4 py-3">Points After</th>
              <th scope="col" className="px-4 py-3">Authorising Admin</th>
              <th scope="col" className="px-4 py-3">Attachments Category</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1 + indexOfFirstItem}
                </td>
                <td className="px-4 py-3">                  
                  {user.updatedAt?.split('T')[0]}
                </td>
                <td className="px-4 py-3">
                  {user.account}
                </td>
                <td className="px-4 py-3">
                  {user.cpoint}
                </td>
                <td className="px-4 py-3">
                  {user.bpoint}
                </td>
                <td className="px-4 py-3">
                  {user.apoint}
                </td>
                <td className="px-4 py-3">
                  {user.admin}
                </td>
                <td className="px-4 py-3">
                  {user.img}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white" style={{ marginRight: '5px' }}>
            {indexOfFirstItem + 1}-{indexOfLastItem > tableData.length ? tableData.length : indexOfLastItem}
          </span>
          {' '}of{' '}
          <span className="font-semibold text-gray-900 dark:text-white" style={{ marginRight: '5px' }}>
            {tableData.length}
          </span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-3 py-2 text-sm font-medium text-white duration-100 hover:bg-primary/90 mr-2"
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-3 py-2 text-sm font-medium text-white duration-100 hover:bg-primary/90 mr-2"
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-3 py-2 text-sm font-medium text-white duration-100 hover:bg-primary/90 mr-2"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
