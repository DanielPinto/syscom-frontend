import React from 'react';


const Pagination = props => {

    const current_page = props.current_page;
    const last_page = props.last_page;
    const getPage = props.getPage;

    const valuesPages = Array.from({ length: last_page }, (_, i) => i + 1);

    const Itens = (props) => {

        return (
            <li className={"page-item " + props.activeLink} onClick={() => props.getValue(props.pageValue)} >
                <a className="page-link">{props.pageValue}</a>
            </li>);
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">

                <li className="page-item" >
                    <a
                        className="page-link "
                        onClick={() => {
                            return (current_page === 1 ? null : getPage(current_page - 1))
                        }}>
                        Previous
                    </a>
                </li>

                {
                    valuesPages.map((value, index) => {

                        let activeLink = value === current_page ? "active" : "";

                        return <Itens pageValue={value} activeLink={activeLink} getValue={getPage} />
                    })
                }

                <li className="page-item" >
                    <a
                        className="page-link "
                        onClick={() => {
                            return (current_page === last_page ? null : getPage(current_page + 1))
                        }}>
                        Next
                    </a>
                </li>

            </ul>
        </nav>

    )
}

export default Pagination;