import React from 'react';

const InputSearch = () => {
    return (
        <form>
            <input className="searchInput" type="text" name="search"/>
            <button type="submit">Guess</button>
        </form>
    );
};

export default InputSearch;