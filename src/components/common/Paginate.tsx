import ReactPaginate from 'react-paginate';
import { useMember } from '../../contexts/MemberContext'

export default function Paginate() {
    const { members, membersPerPage, setCurrentPage } = useMember();
    
    const totalNumberOfPages = Math.ceil(members.length / membersPerPage);
   
    const previousLink = (
       <button className="page-link">Previous</button>
    )
    const nextLink = (
       <button className="page-link">Next</button>
    )
   
    const showPagination = totalNumberOfPages > 1
   
   
    const handlePageClick = (selectedPageNumber: { selected: number }) => {
        const page = selectedPageNumber.selected + 1
        setCurrentPage(page);
    }

   return (
        <>
            {showPagination &&
                <ReactPaginate
                    previousLabel={previousLink}
                    nextLabel={nextLink}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalNumberOfPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageLinkClassName={'page-link'}
                    pageClassName={'page-item'}
                    activeClassName={'active'}
                    activeLinkClassName={'active'}
                    disabledClassName={'invisible'}
                />
            }
        </>
    )
}
