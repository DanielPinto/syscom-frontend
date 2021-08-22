import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from '../../Components/Pagination';
import './style.css';

const Home = () => {

    const initialValues = {
        filter: '',
    };

    const [load, setLoad] = useState(false);
    const [data, setData] = useState([]);
    const [current_page, setCurrent_page] = useState(null)
    const [last_page, setLast_page] = useState(null)
    const token = localStorage.getItem('token');
    const [form, setForm] = useState(initialValues);

    useEffect(() => {
        if (current_page == null)
            getDatas(1);
    }, [])


    const onChange = ev => {
        let name = ev.target.name;
        let value = ev.target.value;

        setForm(
            {
                ...form,
                [name]: value
            }
        );
    }

    const getDatas = async (page) => {

        try {

            setLoad(true);

            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }

            const filter = form !== '' ? `&name=${form.filter}` : ''

            const response = await axios.get("http://localhost:8000/api/products?page=" + page + filter,
                {
                    headers: headers
                });

            if (response.data.data) {
                setData(response.data.data);
                setLast_page(response.data.last_page);
                setCurrent_page(response.data.current_page);
            }

            setLoad(false);

        } catch (error) {
            setLoad(false);
            console.log("ERRO_APP:" + error);
        }

    }

    const onSubmit = ev => {
        ev.preventDefault();
        getDatas(current_page);
    }

    return (
        <div className="container">
            <h1>Dashboard</h1>

            <form className="filter" onSubmit={onSubmit}>
                <input type="text" placeholder="Search.." name="filter" onChange={onChange}/>
                <button type="submit">Search</button>
            </form>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">slug</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        load ?
                            <div className="d-flex justify-content-center w-100" >
                                <div className="spinner-border text-primary" role="status">

                                </div>
                            </div>

                            :
                            data.map((element, index) => {

                                return (
                                    <tr>
                                        <th scope="row">{element.name}</th>
                                        <td>{element.slug}</td>
                                        <td>{element.description}</td>
                                        <td>{element.price}</td>
                                    </tr>
                                )

                            })
                    }

                </tbody>
            </table>

            <Pagination
                current_page={current_page}
                last_page={last_page}
                getPage={getDatas}
            />

        </div>

    );
};

export default Home;