import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

export const SearchBar = ({ text, setText }) => {
    
    const [searchText, setSearchText] = useState(text);

    const handleChangeText = (value) => {
        setSearchText(value);
    };
    

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setText(searchText);
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchText]);

    return (
        <div className="relative mt-3 w-full mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <button
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="text-primary text-sm p-2.5 me-1"
                >
                    <FaSearch />
                    <span className="sr-only">Search</span>
                </button>
            </div>
            <input
                type="text"
                id="search-navbar"
                className="block py-auto w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-secondary focus:border-secondary"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => handleChangeText(e.target.value)}
            />
        </div>
    );
};
