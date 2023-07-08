import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const location = useLocation();

    const searchSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (keyword) {
            navigate(`/?keyword=${keyword}`);
        } else {
            navigate(location.pathname);
        }
    };

    return (
        <form onSubmit={searchSubmitHandler} className='p-2 text-primary border-2 border-primary rounded-lg w-fit bg-lightBlue'>
            <input
                className='bg-lightBlue outline-none'
                type='text'
                placeholder='Search...'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
            <button type='submit'>
                <i className='fa-solid text-primary fa-magnifying-glass'></i>
            </button>
        </form>
    );
}
