import React from "react";
import '../style/Paging.scss';
import Pagination from "react-js-pagination";

const Paging = (props) =>{

    return (
        <Pagination
            activePage={props.Page}
            itemsCountPerPage={props.PageNum}
            totalItemsCount={props.count}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={props.setPage(props.Page+1)} 
        />
    );
};

export default Paging;