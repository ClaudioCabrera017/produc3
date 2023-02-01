import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct()
    }, []);
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {title, description, price})
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log("Error", err));
    }

    const fetchProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setTitle(response.data.product.title);
                setDescription(response.data.product.description);
                setPrice(response.data.product.price);
            })
            .catch((error) => console.log("Error", error));
    }

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                navigate('/')
            })
            .catch((error) => console.log("Error", error));
    }

    return (
        <div>
            <h3>Update</h3>
            <form className='mb-5' onSubmit={onSubmitHandler}>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Title</label>
                                <input name='title' type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Price</label>
                                <input name='price' type="number" step={0.1} className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Description</label>
                                <input name='description' type="text" className="form-control" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    
                    <Link to="/" className='btn btn-secondary'>Go to Form</Link>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <button type="button" className="btn btn-danger" onClick={() => deleteProduct()}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default Edit