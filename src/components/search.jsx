import React, {useState} from "react";
import { Link } from "react-router-dom";
import useApi from "./useApi";

function Search () { 
    
    const { data, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop',
      );

      const [searchInput, setSearchInput] = useState('');
      const [filteredProducts, setFilteredProducts] = useState([]);
    
      if (isLoading) {
        console.log("loading")
      }
    
      if (isError) {
        console.log("error")
      }
    
      function onSearchInputChange(searchValue) {
        setSearchInput(searchValue);
    
        const results = data.filter((product) => {

          return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredProducts(results);
        console.log(results); 
    }

    //   console.log(data); //Remove

    function onInputChange(event) {
        onSearchInputChange(event.currentTarget.value);
    }

    return (<div>
        <input onChange={onInputChange} value={searchInput} />
        {
            searchInput !== ``
            ? <ul className="search-list">
                {filteredProducts.map((item) => (
                    <li key={item.id}>
                        <Link to={'/product/'+item.id}>
                            <div className="mini-img">
                                <img src={item.imageUrl} alt='Product' />
                            </div>
                            <div>{item.title}</div>
                        </Link>
                    </li>
                ))}
                </ul>
            : ``
        }
    </div>
    );
}

export default Search; 


// in App()

// const [products, setProducts] = useState(data);
// const [searchInput, setSearchInput] = useState('');
// const [filteredProducts, setFilteredProducts] = useState([]);

// function onSearchInputChange(searchValue) {
//     setSearchInput(searchValue);

//     const results = data.filter((product) => {
//         return product.title.toLowerCase().includes(searchValue.toLowerCase())
//     });
//     setFilteredProducts(results);
//     console.log(results); 
// }

// App() inside the return

// <Search searchInput={searchInput} onSearchInputChange={onSearchInputChange}setSearchInput />
// {filteredProducts.map((product) => (
// <div key={product.id}>{product.title}</div>
// )))