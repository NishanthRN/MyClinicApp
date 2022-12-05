import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import DashHeader from '../../components/DashHeader'
import DashFooter from '../../components/DashFooter'

const Singlept = () => {

    const { id } = useParams()

    const [patient, setPatient] = useState({})


    const getPatientId = () => {
        axios.get(`http://localhost:4200/users/${id}`).then(data => {
            console.log(data)
            setPatient(data.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPatientId()
    }, [])

    return (
        <>
            <DashHeader />
            {/* <div>{patient?.name}</div>
            <div>{patient?.age}</div>
            <div>{patient?.dob}</div>
            <div>{patient?.address}</div>
            <div>{patient?.maritalstatus}</div>
            <div>{patient?.height}</div>
            <div>{patient?.weight}</div> */}
            <table border={1} >
                <tr>
                    <th>Name</th>
                    <td>{patient?.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{patient?.age}</td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>{patient?.dob}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{patient?.gender}</td>
                </tr>
                <tr>
                    <th>Mobile No</th>
                    <td>{patient?.mobileno}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{patient?.address}</td>
                </tr>
                <tr>
                    <th>Occupation</th>
                    <td>{patient?.occupation}</td>
                </tr>
                <tr>
                    <th>Previous Visited</th>
                    <td>{patient?.prevvisited}</td>
                </tr>
                <tr>
                    <th>Marital Status</th>
                    <td>{patient?.maritalstatus}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{patient?.email}</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>{patient?.height}</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>{patient?.weight}</td>
                </tr>
                <tr>
                    <th>Pan No</th>
                    <td>{patient?.panno}</td>
                </tr>
                <tr>
                    <th>Aadhar No</th>
                    <td>{patient?.aadharno}</td>
                </tr>
                <tr>
                    <th>Diagnosis</th>
                    <td>{patient?.diagnosis}</td>
                </tr>
                <tr>
                    <th>Meds given</th>
                    <td>Medicine name: {patient?.medname1}<br />
                        Dosage: {patient?.dosage1}<br />
                        Quantity: {patient?.quantity1}<br />
                        Food: {patient?.food1}<br />
                        <br />
                        Medicine name: {patient?.medname2}<br />
                        Dosage: {patient?.dosage2}<br />
                        Quantity: {patient?.quantity2}<br />
                        Food: {patient?.food2}<br />
                        <br />
                        Medicine name: {patient?.medname3}<br />
                        Dosage: {patient?.dosage3}<br />
                        Quantity: {patient?.quantity3}<br />
                        Food: {patient?.food3}</td>
                    <br />

                </tr>

                {/* <thead>
                     <th>
                        PID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        DOB
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Mobile No
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Occupation
                    </th>

                </thead> */}

                {/* <tbody>
                    <tr>
                        {/* <td>{patient?.pid}</td> 
                        <td>{patient?.name}</td>
                        <td>{patient?.age}</td>
                        <td>{patient?.dob}</td>
                        <td>{patient?.gender}</td>
                        <td>{patient?.mobileno}</td>
                        <td>{patient?.address}</td>
                        <td>{patient?.occupation}</td>
                    </tr>
                </tbody> */}
                {/* <thead>
                    <th>
                        Previous Visited
                    </th>
                    <th>
                        Marital Status
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Height
                    </th>
                    <th>
                        Weight
                    </th>
                    <th>
                        Pan No
                    </th>
                    <th>
                        Aadhar No
                    </th>

                </thead> */}
                {/* <tbody>
                    <tr>
                        <td>{patient?.prevvisited}</td>
                        <td>{patient?.maritalstatus}</td>
                        <td>{patient?.email}</td>
                        <td>{patient?.height}</td>
                        <td>{patient?.weight}</td>
                        <td>{patient?.panno}</td>
                        <td>{patient?.aadharno}</td>
                    </tr>

                </tbody> */}

                {/* <thead>
                    <th>
                        Diagnosis
                    </th>
                    <th>
                        Medicine
                    </th>
                    <th>
                        Dosage
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Food
                    </th>

                </thead> */}
                {/* <tbody>
                    <tr>
                        <td>{patient?.diagnosis}</td>
                        <td>
                            {patient?.medname1}
                            {patient?.medname2}
                            {patient?.medname3}
                        </td>
                        <td>
                            {patient?.dosage1}
                            {patient?.dosage2}
                            {patient?.dosage3}
                        </td>
                        <td>
                            {patient?.quantity1}
                            {patient?.quantity2}
                            {patient?.quantity3}
                        </td>
                        <td>
                            {patient?.food1}
                            {patient?.food2}
                            {patient?.food3}
                        </td>

                    </tr>

                </tbody> */}

            </table>
            <DashFooter />

        </>
    )
}

export default Singlept