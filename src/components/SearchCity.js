import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function SearchCity({ onUpdateCity }) {
    const [city, setCity] = useState("");
  
    const handleSearch = () => {
      onUpdateCity(city);
    };
    // To change city when pressing enter
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onUpdateCity(city);
      }
    };

  
    return (
      <div className="searchbox">
        <input
          className="input_containter subtitle"
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <FontAwesomeIcon className='search_icon' icon={faMagnifyingGlass}  onClick={handleSearch} />
      </div>
    );
}


export default SearchCity;

