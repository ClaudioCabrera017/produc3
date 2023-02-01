import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
        fetchProduct()
    }, []);

    const fetchProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => setProduct(response.data.product))
            .catch((error) => console.log("Error", error));
    }

    return (
        <div>
            <h3>Detail</h3>
            <div className='container'>
                <div className="card mb-2">
                    <div className='card-header'>id: {product._id}</div>
                    <div className="card-body p-2 p-sm-3">
                        <p className='m-0'><span className='fw-bold'>Title: </span> {product.title}</p>
                        <p className='m-0'><span className='fw-bold'>Price: </span> {product.price}</p>
                        <p className='m-0'><span className='fw-bold'>Description: </span> {product.description}</p>
                    </div>
                </div>
                <div>
                    <Link to="/">Go to Form</Link>
                </div>
            </div>
        </div>
    )
}
export default Detail