
// 'use client'
// import React, { useEffect, useState } from 'react';
// import {
//   QueryClient,
//   QueryClientProvider
// } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Sidebar from './layout/sideBar';
// import RootHeader from './layout/rootHeader';
// import RootFooter from './layout/rootFooter';

// interface Props {
//   children: React.ReactNode;
// }

// // Initialize QueryClient outside the component to persist cache
// const queryClient = new QueryClient();

// const QueryProvider = ({ children }: Props) => {

//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="flex">
//         <div className={`${isOpen ? "w-[15%]" : "w-[5%]"} transition-all duration-300`} >
//           <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//         </div>

//         {/* Main Content */}
//         <div className={`${isOpen ? "w-[85%]" : "w-[95%]"} transition-all duration-300`}>
//           <RootHeader isOpen={isOpen} />
//           <main className="p-6">{children}</main>
//           <RootFooter />
//         </div>
//       </div>
//       <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
//     </QueryClientProvider>
//   );
// };

// export default QueryProvider;


'use client'
import Headre from '@/component/ headre';
import Footer from '@/component/footer';
import React, { useState } from 'react';


interface Props {
  children: React.ReactNode;

}


const Provider = ({ children }: Props) => {
  

  return (
   
    
      <div >
     

       
          <div >
            <Headre />
          </div>

          <main style={{ minHeight: "calc(100vh)" }}
            className="pt-[95px] md:pt-[90px] bg-[#FCFCFC] px-2 md:px-6 lg:px-4">
            {children}
          </main>

          <div>
            <Footer />
          </div>

        </div>
  )
     
};

export default Provider;

