
import Product from './product';
import { products } from './data';
import { useState ,useEffect } from 'react';
import Pagination from './pagination';
function App() {
   const [currentPage, setCurrentPage] = useState();
   const nbrPages = Math.ceil(products.length/12);
   useEffect(() => {
      setCurrentPage(1);
    }, []);
   function handlePageChange(newPage) {
      setCurrentPage(newPage);
    }
   const begin = (currentPage-1)*12;
   const end = currentPage * 12;
   console.log(products.length);
return <>
   <div className="bg-gray-50 ">
      <h2 className="text-2xl font-bold text-center py-20">New Arrivals</h2>
      <div className="container grid max-[350px]:grid-cols-1 min-[351px]:grid-cols-2 min-[351px]:gap-1 min-[550px]:grid-cols-3 min-[550px]:gap-1 min-[1024px]:grid-cols-4 min-[1024px]:gap-1 xl:grid-cols-4 xl:gap-3 mx-auto">
         {products.slice(begin,end).map((p,i)=>{return <Product key={i} product={p}/>})}
      </div>
   </div>

   <div>
      <Pagination totalPages={nbrPages} onPageChange={handlePageChange} currentPage={currentPage} />
   </div>
</>
}

export default App;
