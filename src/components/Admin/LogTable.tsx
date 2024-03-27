"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogTable = () => {
  const TABLE_ROWS = [
    {
      date: "11:49, 22/3/24",
      account: "Firefly",
      cpoint: "+1000",
      bpoint: "0",
      apoint: "1000",
      admin: "Elss",
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",      
    },
    {
      date: "11:40, 22/3/24",
      account: "Cow",
      cpoint: "-10000",
      bpoint: "50000",
      apoint: "40000",
      admin: "Yirru",
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",      
    },
    {
      date: "10:49, 22/3/24",
      account: "Apple",
      cpoint: "+500",
      bpoint: "0",
      apoint: "500",
      admin: "Elss",
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",      
    },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [players, setPlayers] = useState([]); // Assuming players is the data array

  const { push } = useRouter()

  if (typeof window !== 'undefined') {
    const username = sessionStorage.getItem('user_name');
    const token = sessionStorage.getItem('entity_token');
    if (!token) {
      push('/');
    }
    if (username != process.env.NEXT_PUBLIC_Administrator1 && username != process.env.NEXT_PUBLIC_Administrator2)
      push('/');
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to perform search
  const performSearch = () => {
    if (players.length > 0) {
      const results = players.filter((user) => {
        const username = user.LinkedAccounts[0]?.Username || '';
        const email = user.LinkedAccounts[0]?.Email || '';
        return (
          username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchResults(results);
    }
  };

  // Use searchResults if search term is entered, else use players
  const dataToDisplay = searchTerm ? searchResults : players;

  // Logic to calculate the total number of pages
  const totalPages = Math.ceil(dataToDisplay.length / itemsPerPage);

  // Get current items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataToDisplay.slice(indexOfFirstItem, indexOfLastItem);
  // Update the handlePointsChange function
  const handlePointsChange = (event, index) => {
    const updatedData = [...dataToDisplay];
    updatedData[index].Points = event.target.value;

    // Update the state based on whether the search term is applied or not
    if (searchTerm) {
      const updatedSearchResults = [...searchResults];
      updatedSearchResults[index].Points = event.target.value;
      setSearchResults(updatedSearchResults);
    } else {
      setPlayers(updatedData);
    }
  };

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
            {TABLE_ROWS.map((user, index) => (
              <tr key={user.No} className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1 + indexOfFirstItem}
                </td>
                <td className="px-4 py-3">                  
                  {user.date}
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
            {indexOfFirstItem + 1}-{indexOfLastItem > players.length ? players.length : indexOfLastItem}
          </span>
          {' '}of{' '}
          <span className="font-semibold text-gray-900 dark:text-white" style={{ marginRight: '5px' }}>
            {players.length}
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

export default LogTable;