import React from "react";
import cities from "../cities.json";
import { GoSearch } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import Div from "../miniComp/Div";
const Search = ({
  searchBox,
  setSearchBox,
  setcity,
  city,
  setInp,
  inp,
  weatherHandler,
}) => {
  const changeHandler = (e) => {
    setInp(e.target.value);
    const cpy = cities.filter(function (data) {
      return data.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setcity(cpy);
  };
  const clear = () => {
    setcity([]);
    setInp("");
    setSearchBox(false);
  };
  const search = () => {
    const cpy = [...cities];
    setcity(cpy);
    setSearchBox(true);
  };

  return (
    <Div className="inp">
      <input
        type="text"
        placeholder="Search Cities"
        onChange={changeHandler}
        value={inp}
        onFocus={search}
        onBlur={() =>
          setTimeout(() => {
            clear();
          }, 500)
        }
      />
      <Div className="icon">
        {inp ? (
          <GrClose onClick={clear} size={20} />
        ) : (
          <GoSearch onClick={search} size={20} />
        )}
      </Div>
      {searchBox && (
        <Div className="search">
          {city
            .map((e, i) => (
              <p key={i} onClick={() => weatherHandler(i)}>
                {e.name}
              </p>
            ))
            .splice(0, 15)}
        </Div>
      )}
    </Div>
  );
};

export default Search;
