import React, {useState} from "react";

const data = [{id:1}, {id:2}];

function Search (searchInput, onSearchInputChange) { 
    function onInputChange(event) {
        onSearchInputChange(event.currentTarget.value);
    }

    return (<div>
        <input onChange={onInputChange} value={searchInput} />
        {data.map((item) => (
            <div>render data</div>
        ))}
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