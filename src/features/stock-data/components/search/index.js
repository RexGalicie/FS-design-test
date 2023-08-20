import React from "react";

import ActionButton from "../../../../shared/ui/button";
import Input from "../../../../shared/ui/input";

function SearchInput({ inputDate, handleInputChange, handleOnClick }) {
  
 return (
    <>
     <Input
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
          value={inputDate}
          onChange={handleInputChange}
        />
        <ActionButton
          id="submit-button"
          data-testid="submit-button"
          onClick={handleOnClick}
          disabled={!inputDate}
        >
          Search
        </ActionButton>
    </>
  );
}

export default SearchInput;


