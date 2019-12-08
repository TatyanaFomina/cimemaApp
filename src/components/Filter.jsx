import React, {useState} from 'react';
import Select from 'react-select';

export const Filter = ({movies, setFilteredMovies, genres}) => {
    
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) => {
        

        return movies.reduce((acc, item) => {
            const hasAllFilters = valueInput && valueSelect;
            const checkHasGenre = item.genre && item.genre.length;
            const hasOnlyTitleFilter = valueInput && !valueSelect;
            const hasOnlySelectFilter = !valueInput && valueSelect;
            const checkTitleFilter = item.title.toLowerCase().includes(valueInput.toLowerCase());
            const checkGenreFilter = item.genre.some(elem => elem.trim() === valueSelect);

            if ( hasAllFilters && checkHasGenre && checkGenreFilter && checkTitleFilter) {
                  acc.push(item);
            } else if (hasOnlyTitleFilter  && checkTitleFilter){
                  acc.push(item);
            } else if (hasOnlySelectFilter && checkHasGenre && checkGenreFilter) {
                  acc.push(item);
            } 
                return acc;
            }, []);
    }

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
       setFilteredMovies(getFilteredMovies(value, valueSelect));
    };

    const handleChangeSelect = (option) => {
        const value = option? option.value : "";
        setValueSelect(value);   
        setFilteredMovies(getFilteredMovies(valueInput, value));
    };

    const genresOptions = genres.map( item => {
        return {
            value: item,
            label: item
        }
    });
   
    // {genres.map((item, i) => <option key={i} value={item}>{item}</option>)}
    return (
            
            <div className="form-control width-1-1">
               <span className="form-name"><b>Фильтр:</b></span>
               <div className="custom-select">
                   <Select onChange={handleChangeSelect} options={genresOptions} isClearable={true} placeholder="Жанр" />
               </div>
               
                <input className="input input-filter" name="filter-name" value={valueInput} onChange={handleChangeInput} placeholder="Введите значение" />
                <span className="icon-flip"><i className="icon-edit" aria-hidden="true"></i></span>
            </div>
    );
}