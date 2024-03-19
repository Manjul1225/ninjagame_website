"use client";
import { useEffect, useState } from "react";


const Admin = () => {
  const secretKey = 'OINS4Z6M6Y4361SGFG6ZQGIOGF1ORDXPOKBFTBRMAB7ZPUSMR5';
  const segmentId = 'CA6478E00226BD37';

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const playersResponse = await fetch(`https://7C688.playfabapi.com/Admin/GetPlayersInSegment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-SecretKey': secretKey,
          },
          body: JSON.stringify({ SegmentId: segmentId }),
        });

        if (!playersResponse.ok) {
          const errorData = await playersResponse.json();
          throw new Error(errorData.errorMessage);
        }

        const playersInSegment = await playersResponse.json();
        setPlayers(playersInSegment.data.PlayerProfiles);        

      } catch (error) {
        // console.error('Error fetching player data:', error);
      }
    }
    getData();
    
  }, []);

  // console.log(players);

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

  const handlePointsChange = (event, index) => {
    const updatedData = [...dataToDisplay];
    updatedData[index].Points = event.target.value;
    setSearchResults(updatedData);
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="w-full">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-1 lg:grid-cols-1">
            <div className="flex items-start space-x-4">
              <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">Point</button>
              <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">Notice Board Bet</button>
              <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">Logs</button>
            </div>

            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
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
                      <th scope="col" className="px-4 py-3">No</th>
                      <th scope="col" className="px-4 py-3">Login ID</th>
                      <th scope="col" className="px-4 py-3">Email Address</th>
                      <th scope="col" className="px-4 py-3">Date of Registration</th>
                      <th scope="col" className="px-4 py-3">Points</th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((user, index) => (
                      <tr key={user.No} className="border-b dark:border-gray-700">
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1 + indexOfFirstItem}</td>
                        <td className="px-4 py-3">{user.LinkedAccounts[0].Username}</td>
                        <td className="px-4 py-3">{user.LinkedAccounts[0].Email}</td>
                        <td className="px-4 py-3"> {new Date(user.Created).toISOString().split('T')[0]}</td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            className="dark:bg-gray-800 px-4 py-2"
                            style={{ width: '120px' }}
                            value={user.Points}
                            onChange={(e) => handlePointsChange(e, index)} // Pass index to identify the user
                          />
                        </td>
                        <td className="px-4 py-3 flex items-center justify-end">
                          {/* Actions button */}
                          <button
                            id={`user-actions-dropdown-button-${user.No}`}
                            data-dropdown-toggle={`user-actions-dropdown-${user.No}`}
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* ... (actions icon) ... */}
                            </svg>
                          </button>
                          <div
                            id={`user-actions-dropdown-${user.No}`}
                            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`user-actions-dropdown-button-${user.No}`}>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                              </li>
                            </ul>
                            <div className="py-1">
                              <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {indexOfFirstItem + 1}-{indexOfLastItem > players.length ? players.length : indexOfLastItem}
                  </span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">{players.length}</span>
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
            <div className="flex justify-end items-center mt-4 space-x-4">
              <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">Add Point</button>
              <button className="shadow-submit dark:shadow-submit-dark flex items-center justify-start rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">Remove Point</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section >
  );
};

export default Admin;
