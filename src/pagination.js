export default function Pagination({ totalPages, onPageChange, currentPage }){
    const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="pagination">
        <ul className="inline-flex -space-x-px">
            <li>
                <button onClick={() => onPageChange(currentPage-1)}
                className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg  ${(currentPage === 1)?'pointer-events-none':'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
                    Previous
                </button>
            </li>

            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                    <button onClick={() => onPageChange(pageNumber)} className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${(currentPage === pageNumber)?'dark:bg-black dark:border-black dark:text-white dark:hover:bg-gray-700 dark:hover:text-white':'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>{pageNumber}</button>
                </li>
            ))}

            <li>
                <button onClick={() => onPageChange(currentPage+1)}
                className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  ${(currentPage === totalPages)?'pointer-events-none':'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`}>
                    Next
                </button>
            </li>
        </ul>
    </nav>
  );
}