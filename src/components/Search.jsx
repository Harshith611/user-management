import React,{useState} from 'react'

function Search(props) {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const onSearch=()=>{
        if(selectedOption==='username'){
            const filtered = props.users.filter(user => user.Username.toLowerCase().includes(searchValue.toLowerCase()));
            props.filterUsers(filtered);
        }
        if(selectedOption==='email'){
            const filtered = props.users.filter(user => user.Email.toLowerCase().includes(searchValue.toLowerCase()));
            props.filterUsers(filtered);
        }
        if(selectedOption==='phone'){
            const filtered = props.users.filter(user => user.Phone.toLowercase().includes(searchValue.toLowerCase()));
            props.filterUsers(filtered);
        }
        if(selectedOption==='id'){
            const filtered = props.users.filter(user => user.ID==searchValue);
            props.filterUsers(filtered);
        }
    }
    const onClear = ()=>{
        setSelectedOption('');
        setSearchValue('');
        props.resetUsers();
    }
    return (
        <div className="container">
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Select --</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="id">Id</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button id="searchButton" onClick={onSearch}>Search</button>
        <button id="resetButton" onClick={onClear}>Reset</button>
      </div>
  )
}

export default Search