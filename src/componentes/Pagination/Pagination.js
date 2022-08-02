import React from "react";
import '../Pagination/Pagination.css';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}>👎</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>👍</button>
        </div>
    )
};

export default Pagination;