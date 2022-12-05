import React, { useEffect, useState } from 'react'
import axios from "axios"
import DashHeader from '../../components/DashHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import DashFooter from '../../components/DashFooter'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const ViewDatabase = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    function goToAddPatient(id) {
        navigate(`/addpt/${id}`);
    }
    function gotoViewpt(id) {
        navigate(`/indpt/${id}`);
    }
    function goToSearchpt() {
        navigate(`/searchpt`);
    }


    const getData = async () => {

        console.log("async res")



        var config = {
            method: 'get',
            url: 'http://localhost:4200/users',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <DashHeader />
            <section className='viewdb'>
                <center>
                    <br />
                    <h1>View Patient History</h1>
                </center>
                {/* <br/> */}
            </section>
            <section className='searchbar'>
                {/* <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Search Patient <FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter patient's name" /><br />
                    <input class="btn btn-primary" type="submit" value="Search" /> */}
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter patient's name" aria-label="Search" />
                    <button class="btn btn-light btn-outline-success btn-lg" type="submit" onClick={goToSearchpt}>Search</button>

                </form>

                {/* </div> */}
            </section>

            <br />
            <table border={1} >
                <thead>
                    <th>
                        PID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Mobile No
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Previous Visited
                    </th>
                    <th>
                        View
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </thead>

                <tbody>


                    {data?.map((item, key) => {
                        return <tr>
                            <td>{item.pid}</td>
                            <td>{item.name}</td>
                            <td>{item.mobileno}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.prevvisited}</td>


                            <td><button classname='icon-button table__button' onClick={() => gotoViewpt(item._id)}><FontAwesomeIcon icon={faEye} />

                            </button></td>
                            <td><button classname='icon-button table__button' onClick={() => goToAddPatient(item._id)}><FontAwesomeIcon icon={faPenToSquare} />
                                {/* <td><button classname='icon-button table__button' onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /> */}

                            </button></td>
                            <td><button classname='icon-button table__button'  ><FontAwesomeIcon icon={faTrash} />

                                {/* <td><button classname='icon-button table__button' onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /> */}

                            </button></td>
                        </tr>
                    })}
                </tbody>

            </table>
            <DashFooter />
        </>
    )
}

export default ViewDatabase