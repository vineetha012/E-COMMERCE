import React, { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { Card } from "./card";
import axios from "axios";
import './card.css'
export const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [Itemperpage, setItemperpage] = useState(10)
    const [searchval, setSearchval] = useState('');
    //console.log(products)
    const indexOfLastItem = currentpage * Itemperpage;
    const indexOfFirstItem = indexOfLastItem - Itemperpage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem)
    useEffect(() => {
         const fetchProducts = async () => {
            let response = await axios.get("https://dummyjson.com/products?limit=50")
             console.log(response)
            response = response.data.products

            setProducts(response);
        };
        fetchProducts();
    }, []);
    const keys = ["category"]
    const HandleSearch = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(searchval)))
    }
    return (

        <>
            <div>
                <h1 style={{ textAlign: "center", color: "rgb(43, 156, 205)" }}>E-Commerce</h1>
                <div style={{ textAlign: "center", color: "rgb(43, 78, 205)" }}>AVAILABLE PRODUCTS</div>

            </div>
            <div className="search-filter-container">
                <label>Search by category</label>
                <select onChange={(e) => setSearchval(e.target.value)}>
                    <option value="">ALL PRODUCTS</option>
                    <option value="laptops">laptops</option>
                    <option value="groceries">groceries</option>
                    <option value="home-decoration">home-decoration</option>
                    <option value="womens-dresses">womens-dresses</option>
                    <option value="fragrances">fragrances</option>
                </select>
            </div>
            <div className="card-flex">
                <div className="card-container">

                    {
                        searchval ? HandleSearch(products).map((data, key) => {
                            console.log(data)
                            return (
                                <>
                                    <Card key={key} currentItems={currentItems} data={data} />
                                </>
                            )
                        })
                            : currentItems.map((data, key) => {
                                return (
                                    <Card key={key} currentItems={currentItems} data={data} />
                                )
                            })
                    }
                </div>
                
            </div>
            <div className="pageNumbersContainer" style={{color:"wheat"}}>
                    pages
                    {
                        searchval ? <Pagination products={HandleSearch(products)} setcurrentpage={setcurrentpage} Itemperpage={Itemperpage} />
                            : <Pagination products={products} setcurrentpage={setcurrentpage} Itemperpage={Itemperpage} />
                    }
                </div>

        </>
    )
}