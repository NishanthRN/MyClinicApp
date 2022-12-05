import React, { useState } from 'react'
import style from './addpatient.module.css'
import DashHeader from '../../components/DashHeader'
import DashFooter from '../../components/DashFooter'
import axios from "axios"
import Datepicker from "react-datepicker"


const AddPatient = () => {
    const [data, setData] = useState()
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let toddate = (day + "-" + month + "-" + year);

    const [info, setInfo] = useState({})

    const handleChange = (e) => {
        const Name = e.target.name;

        setInfo(prev => ({ ...prev, [Name]: e.target.value }))
    }


    const handleSubmit = (e) => {

        // if (!info.address) {
        //     return alert("please fille the details")
        // }
        e.preventDefault();
        console.log(info);
        var config = {
            method: 'post',
            url: 'http://localhost:4200/users',
            headers: {
                'Content-Type': 'application/json'
            },
            data: info
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
                                    // id="gender"
                                    onChange={handleChange}
                                    className={style.input1}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="mobileno" className={style.label1}>
                                    Mobile no
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="tel"
                                    name="mobileno"
                                    className={style.input1}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter mobile no"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="address" className={style.label1}>
                                    Address
                                    <span>*</span>
                                </label>
                                <br />
                                <textarea
                                    name="address"
                                    id="addr"
                                    cols={30}
                                    rows={3}
                                    onChange={handleChange}
                                    className={style.input1}
                                // defaultValue={"lol"}
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="occupation" className={style.label1}>
                                    Occupation
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="occupation"
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Enter occupation"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="prevvisited" className={style.label1}>
                                    Today's Date
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="prevvisited"
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
                                <label htmlFor="maritalstatus" className={style.label1}>
                                    Marital Status
                                    <span>*</span>
                                </label>
                                <br />
                                <select name="maritalstatus"
                                    // id="marst"
                                    onClick={handleChange}
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
                                    onChange={handleChange}
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
                                    required=""
                                    onChange={handleChange}
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
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter weight"
                                />
                            </div>
                        </div>
                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="panno" className={style.label1}>
                                    PAN No
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    name="panno"
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Enter PAN Card number"
                                />
                            </div>
                            <div className="col inputleft">
                                <label htmlFor="aadharno" className={style.label1}>
                                    AADHAR No
                                    {/* <span>*</span> */}
                                </label>
                                <br />
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    name="aadharno"
                                    onChange={handleChange}
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
                    <label htmlFor="diagnosis" />
                    <textarea
                        id="di"
                        name="diagnosis"
                        rows={10}
                        cols={110}
                        onChange={handleChange}
                    // defaultValue={
                    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit expedita quae fugiat, voluptates debitis mollitia aliquid deserunt laudantium neque fuga id accusamus cum perferendis magni corporis quam eos possimus.\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum, similique ex quis tempora nulla ullam veritatis, distinctio velit iure esse error odio? Explicabo nihil unde culpa nostrum, ut facilis.\n"
                    // }
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
                            <label htmlFor="medname" name="medname1">
                                Medicine name
                            </label>
                            <input
                                type="text"
                                name="medname1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="dosage1">
                                Dosage
                            </label>
                            <input
                                type="text"
                                name="dosage1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="quantity1">
                                Quantity
                            </label>
                            <input
                                type="text"
                                name="quantity1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="food1">
                                Food
                            </label>
                            <input
                                type="text"
                                name="food1"
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
                                name="medname2"
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
                                name="dosage2"
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
                                name="quantity2"
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
                                name="food2"
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
                                name="medname3"
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
                                name="dosage3"
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
                                name="quantity3"
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
                                name="food3 "
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
                    <button className="btn btn-light btn-outline-dark" name="sub" onClick={(e) => handleSubmit(e)}>Save</button>
                </div>
            </section>

            <DashFooter />
        </>

    )
    return content
}

export default AddPatient