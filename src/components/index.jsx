// import React, {Link} from "react";
// import useApi from "./useApi";
// import searchIcon from './icons/search-icon.png';


// function index() {
//     const { data, isLoading, isError } = useApi(
//       'https://api.noroff.dev/api/v1/online-shop',
//     );
  
//     if (isLoading) {
//       return <main id='home'>
//       <div className='container'>
//         <h1 className='home-heading'>
//           Homepage
//         </h1>
//         <div className='searchInput'>
//           <img src={searchIcon} alt='Search icon'/>
//           <input aria-label='search input' />
//         </div>
//         <div className='loading' aria-label='loading'>
//         </div>
//       </div>
//     </main>;
//     }
  
//     if (isError) {
//       return <main id='home'>
//       <div className='container'>
//         <h1 className='home-heading'>
//           Homepage
//         </h1>
//         <div className='searchInput'>
//           <img src={searchIcon} alt='Search icon'/>
//           <input aria-label='search input' />
//         </div>
//         <div className='error'>
//           Error! Please refresh.
//         </div>
//       </div>
//     </main>;
//     }
  
//     console.log(data); //Remove
  
//     return (<main id='home'>
//         <div className='container'>
//           <h1 className='home-heading'>
//             Homepage
//           </h1>
//           <div className='searchInput'>
//             <img src={searchIcon} alt='Search icon'/>
//             <input aria-label='search input' />
//           </div>
//           <div className='products-container'>
//             {data.map((data) => (
//               <Link key={data.id} to={`/product/${data.id}`}>
//                 <div className='product-img-wrap'>
//                   <img src={data.imageUrl} className='product-img' alt='Product' />
//                 </div>
//                 <div>
//                   <div className='product-title'>{data.title}</div>
//                   <div className='product-price'>
//                     {
//                       data.discountedPrice === data.price
//                         ? data.price+',-'
//                         : <span className='discount'>{data.discountedPrice},- <span className='discount-off'>({(data.price - data.discountedPrice).toFixed(2)},- OFF)</span></span>
//                       }
//                     </div> 
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </main>);
//   }

//   export default index;