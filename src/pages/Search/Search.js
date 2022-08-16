import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { PaginationMovies } from "../../components/Pagination/Pagination";
import { Card } from "../../components/Card/Card";
import styled from "styled-components";
import useDebounce from "../../hook/useDebounce";

export const Search = () => {
    const { searchQuery } = useParams()

    const [movies, setMovies] = useState({
        isLoading: true,
        isError: false,
        data: {},
        totalPage: 1,
    });
    const [activePage, setActivePage] = useState(1)

    const debouncedValue = useDebounce(searchQuery, 800)

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '91516251523cadb315938d57c611f05c',
                    page: activePage,
                    query: debouncedValue,
                },
            })
            .then((res) => {
                setMovies({
                    isLoading: false,
                    isError: false,
                    data: res.data.results,
                    totalPage: res.data.total_pages > 500 ? 500 : res.data.total_pages,
                })
                console.log(res.data);
            })
            .catch((err) => setMovies({
                isLoading: false,
                isError: true,
                ...movies,
            }));
    }, [activePage, debouncedValue]);


    return (
        <div>
            {movies.data.length && (
                <List>
                    {movies.data.map((e) => (
                        <Card key={e.id} item={e} />
                    ))}
                </List>
            )}
            <PaginationMovies count={movies.totalPage} setActivePage={setActivePage} />
        </div>
    )
}

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	list-style-type: none;
`;
