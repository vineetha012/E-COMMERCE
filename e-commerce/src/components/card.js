import React, { useEffect, useState } from "react";
import './card.css'
export const Card = ({ data, currentItems }) => {
    const [popupflag, setPopUpflag] = useState(false)
    const [popupcard, setPopUpCard] = useState("")
    const [selectedproduct, setselectedproduct] = useState(null)
    const cardhandler = (e) => {
        console.log("id", e.target.id);
        setPopUpCard(e.target.id)
        setPopUpflag(true)
    }
    console.log("selectedproduct", selectedproduct)
    const selectPost = post => setselectedproduct(post);
    console.log(data)
    return (
        <div className="card-main" onClick={() => selectPost(data)}>
            <div className="cardss" id={data.id} onClick={(e) => cardhandler(e)} >
                <div >
                    <div style={{marginBottom:"10px"}}>PRODUCT :- {data.title}</div>
                    <div style={{marginBottom:"10px"}}>CATEGORIE :- {data.category}</div>
                    <div style={{marginBottom:"10px"}}>ID :- {data.id}</div>
                    <img src={data.images[1]} className="cardimage" />
                </div>
            </div>       
            {popupflag && (
                <PopUp selectedproduct={selectedproduct} setPopUpflag={setPopUpflag} setselectedproduct={setselectedproduct} />
            )}
        </div>
    )
}

function PopUp({ selectedproduct, setPopUpflag }) {
    return (
        <div className="mainPopUp">
            <div className='popupcard'>
                <div className="popupcontainer">
                    <div className="pop-col">
                        <div className="upperpop ">
                            CATEGORIE:<br/>{selectedproduct.category}</div>
                        <img src={selectedproduct.images[0]} className="cardimage" />
                    </div>
                    <div className="pop-col">
                        <div className="btn-cont">
                            <button onClick={() => setPopUpflag(false)} className="upperpop closepop">
                                Close
                            </button>
                        </div>                       
                        <div className="description ">Details:{selectedproduct.description}</div>
                        <div className="description ">BRAND: {selectedproduct.brand}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
