import React from "react";
export const Pagination = ({ products, setcurrentpage, Itemperpage }) => {
    const handlePageNumber = (pgnumber) => {
        console.log(pgnumber)
        setcurrentpage(pgnumber)
    }
    const pages = []
    for (let i = 1; i <= Math.ceil(products.length / Itemperpage); i++) {
        pages.push(i)
    }
    const renderpagenumbers = pages.map(pgnumber => {
        console.log(pgnumber)
        return (
            <button className="pagenums" type="submit" key={pgnumber} id={pgnumber} onClick={() => handlePageNumber(pgnumber)}  >
                {pgnumber}
            </button>
        )
    })
    return (
        <div className="">
            {renderpagenumbers}
        </div>
    )
}
