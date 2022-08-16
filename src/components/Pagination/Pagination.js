import styled from "styled-components"
import Pagination from '@mui/material/Pagination';

export const PaginationMovies = ({count, setActivePage}) => {
    return (
        <Row>
            <Pagination onClick={(evt) => {
                setActivePage(evt.target.innerText)
            }} count={count} variant="outlined" shape="rounded" />
        </Row>
    )
}

const Row = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0;
`