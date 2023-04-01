import React, {useState} from "react";
import { Link } from "react-router-dom";
import useApi from "./useApi";

function Search () { 
    
    const { data, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop',
      );

      const [searchInput, setSearchInput] = useState('');
      const [filteredProducts, setFilteredProducts] = useState([]);
    
      if (isError) {
        return <div>An error occurred! Please refresh.</div>
      }
    
      function onSearchInputChange(searchValue) {
        setSearchInput(searchValue);
    
        const results = data.filter((product) => {

          return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredProducts(results);
    }

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