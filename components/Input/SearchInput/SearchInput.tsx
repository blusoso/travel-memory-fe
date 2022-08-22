import React from "react";
import Input from "../Input";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = {
  name: string;
};

const SearchInput = ({ name }: SearchInputProps) => {
  return (
    <Input
      name={`search-${name}`}
      placeholder="Search"
      iconStart={<SearchIcon fontSize="small" />}
    />
  );
};

export default SearchInput;
