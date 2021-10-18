import React from "react";
import '../style/Paging.scss';
import Pagination from "react-js-pagination";


const Paging = (props) =>{
    return (
        <Pagination
            activePage={props.page}
            itemsCountPerPage={props.PageNum}
            totalItemsCount={props.count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={(event)=>{
                    props.setPage(event);
                }
            } 
        />
    );
};

export default Paging;