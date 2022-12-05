import style from './addpatient.module.css'
import DashHeader from '../../components/DashHeader'
import DashFooter from '../../components/DashFooter'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const EditPatient = () => {
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

    const [data, setData] = useState()
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let toddate = (day + "-" + month + "-" + year);

    const [info, setInfo] = useState({})

    const handleChange = (e) => {
        const Name = e.target.name;

        setPatient(prev => ({ ...prev, [Name]: e.target.value }))
    }


    const handleSubmit = (e) => {

        // if (!info.address) {
        //     return alert("please fille the details")
        // }
        e.preventDefault();
        console.log(info);
        var config = {
            method: 'patch',
            url: 'http://localhost:4200/users',
            headers: {
                'Content-Type': 'application/json'
            },
            data: patient
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        {
            data.map((key) => {
                console.log(data.Name)
            })
        }
    }


    const content = (
        <>
            <DashHeader />
            <section className={style.addPatient}>
                <div id="mu">
                    <center>
                        <h2>Personal info</h2>
                    </center>
                </div>

                {/* {data.map((key) => {
                    console.log(data.Name)
                })} */}

                <section className={style.addptn}>
                    <div className={style.form1}>
                        <form />
                        <div className={style.row}>

                            <div className="col inputleft">
                                <label htmlFor="name" className={style.label1}>
                                    Name
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    className={style.input1}
                                    value={patient?.name}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter patient's name"
                                    size={40}
                                />
                            </div>

                            <div className="col inputleft">
                                <label htmlFor="age" className={style.label1}>
                                    Age
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="age"
                                    value={patient?.age}
                                    className={style.input1}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter patient's age"
                                    size={40}
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="dob" className={style.label1}>
                                    DOB
                                    <span>*</span>
                                </label>
                                <br />
                                <input type="date"
                                    name="dob"
                                    value={patient?.dob}
                                    onChange={handleChange}
                                    className={style.input1} />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="gender" className={style.label1}>
                                    Gender
                                    <span>*</span>
                                </label>
                                <br />
                                <select name="gender"
                                    id="gender"
                                    onChange={handleSubmit}
                                    value={patient?.gender}
                                    className={style.input1}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="mobno" className={style.label1}>
                                    Mobile no
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="tel"
                                    name="mobno"
                                    className={style.input1}
                                    value={patient?.mobileno}

                                    required=""
                                    onChange={handleSubmit}
                                    placeholder="Enter mobile no"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="addr" className={style.label1}>
                                    Address
                                    <span>*</span>
                                </label>
                                <br />
                                <textarea
                                    name="addr"
                                    id="addr"
                                    cols={30}
                                    rows={3}
                                    onChange={handleChange}
                                    value={patient?.address}

                                    className={style.input1}
                                    defaultValue={"lol"}
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="occ" className={style.label1}>
                                    Occupation
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="occ"
                                    onChange={handleChange}
                                    value={patient?.occupation}
                                    className={style.input1}
                                    placeholder="Enter occupation"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="height" className={style.label1}>
                                    Today's Date
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="date"
                                    className={style.input1}
                                    required=""
                                    // onClick={handleSubmit}
                                    placeholder="Enter height"
                                    value={toddate}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="marst" className={style.label1}>
                                    Marital Status
                                    <span>*</span>
                                </label>
                                <br />
                                <select name="maritalstatus"
                                    id="marst"
                                    onClick={handleSubmit}
                                    value={patient?.maritalstatus}
                                    className={style.input1}>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Legally separated">Legally separated</option>
                                    <option value="Widowed">Widowed</option>
                                </select>
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="email" className={style.label1}>
                                    Email
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    onClick={handleSubmit}
                                    value={patient?.email}
                                    className={style.input1}
                                    placeholder="Enter email address"
                                    size={40}
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="height" className={style.label1}>
                                    Height
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="height"
                                    className={style.input1}
                                    value={patient?.height}
                                    required=""
                                    onClick={handleSubmit}
                                    placeholder="Enter height"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="weight" className={style.label1}>
                                    Weight
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="weight"
                                    className={style.input1}
                                    value={patient?.weight}
                                    required=""
                                    onClick={handleSubmit}
                                    placeholder="Enter weight"
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="adhr" className={style.label1}>
                                    PAN No
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    name="pan"
                                    onChange={handleChange}
                                    value={patient?.panno}
                                    className={style.input1}
                                    placeholder="Enter PAN Card number"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="adhr" className={style.label1}>
                                    AADHAR No
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    name="adharno"
                                    onChange={handleChange}
                                    value={patient?.aadharno}
                                    className={style.input1}
                                    placeholder="Enter aadhar no"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <center>
                        <h2>Diagnosis report</h2>
                    </center>
                </div>
                <section className={style.sec1}>
                    <label htmlFor="diag" />
                    <textarea
                        id="di"
                        name="diagnosis"
                        rows={10}
                        cols={110}
                        value={patient?.diagnosis}
                        onChange={handleChange}
                        defaultValue={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit expedita quae fugiat, voluptates debitis mollitia aliquid deserunt laudantium neque fuga id accusamus cum perferendis magni corporis quam eos possimus.\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum, similique ex quis tempora nulla ullam veritatis, distinctio velit iure esse error odio? Explicabo nihil unde culpa nostrum, ut facilis.\n"
                        }
                    />
                </section>
                <div>
                    <center>
                        <h2>Prescription</h2>
                    </center>
                </div>
                <section className={style.prescription}>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="" name="medicine">
                                Medicine name
                            </label>
                            <input
                                type="text"
                                name="medicine"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="dosage">
                                Dosage
                            </label>
                            <input
                                type="text"
                                name="dosage"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="quantity">
                                Quantity
                            </label>
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="food">
                                Food
                            </label>
                            <input
                                type="text"
                                name="food"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col">
                            {/* <label htmlFor="" name="medicine">
                                Medicine name
                            </label> */}
                            <input
                                type="text"
                                name="medicine"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="dosage">
                                Dosage
                            </label> */}
                            <input
                                type="text"
                                name="dosage"
                                className="form-control"
                                onChange={handleSubmit}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="quantity">
                                Quantity
                            </label> */}
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="food">
                                Food
                            </label> */}
                            <input
                                type="text"
                                name="food"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col">
                            {/* <label htmlFor="" name="medicine">
                                Medicine name
                            </label> */}
                            <input
                                type="text"
                                name="medicine"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="dosage">
                                Dosage
                            </label> */}
                            <input
                                type="text"
                                name="dosage"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="quantity">
                                Quantity
                            </label> */}
                            <input
                                type="text"
                                name="quantity"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="food">
                                Food
                            </label> */}
                            <input
                                type="text"
                                name="food"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                </section>
                <div className={style.buttonsubmit}>
                    {/* <input  className="btn btn-light btn-outline-dark" name="sub" value="Save" /> */}
                    <button className="btn btn-light btn-outline-dark" name="sub" onClick={(e) => handleSubmit(e)}>Update</button>
                </div>
            </section>

            <DashFooter />
        </>
    )
    return content

}

export default EditPatient