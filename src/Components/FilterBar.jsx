import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FilterBar({sortLowHigh, sortHighLow, sortRated, selectCategory}){

    return(
        <div className="filter-bar">
            <Dropdown className='dropdown'>
              <DropdownButton id="dropdown-basic-button" title="Sort By">
                <Dropdown.Item onClick={sortLowHigh}>Price (Low to High)</Dropdown.Item>
                <Dropdown.Item onClick={sortHighLow}>Price (High to Low)</Dropdown.Item>
                <Dropdown.Item onClick={sortRated}>Highest Rated</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
            <Dropdown>
              <DropdownButton id="dropdown-basic-button" title="Category">
                <Dropdown.Item onClick={() => selectCategory("All")}>All</Dropdown.Item>
                <Dropdown.Item onClick={() => selectCategory("men's clothing")}>Men's Clothing</Dropdown.Item>
                <Dropdown.Item onClick={() => selectCategory("women's clothing")}>Women's Clothing</Dropdown.Item>
                <Dropdown.Item onClick={() => selectCategory("jewelry")}>Jewelry</Dropdown.Item>
                <Dropdown.Item onClick={() => selectCategory("electronics")}>Electronics</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
        </div>
    )
}