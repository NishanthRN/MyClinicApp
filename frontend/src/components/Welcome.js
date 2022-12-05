import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Welcome = () => {

    // const date = new Date()
    // const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">


            {/* <p><Link to="/dash/addpt">Add new Patient</Link></p>

            <p><Link to="/dash/viewpt">Search existing Patient</Link></p>

            <p><Link to="/dash/viewdb">View all patients</Link></p> */}

            <main>
                <div className="container py-4">
                    <header className="pb-3 mb-4 border-bottom">
                        <a
                            href="/"
                            className="d-flex align-items-center text-dark text-decoration-none"
                        ></a>
                    </header>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Welcome, Admin</h1>
                            <p className="col-md-8 fs-4">Enroll new patient here.</p>
                            <a href="personinfo.html">
                                {/* <button className="btn btn-outline-dark" type="button">
                                    Add new Patient +
                                     <Navigate to='/addpt' /> 
                                </button> */}
                                <Link to="/addpt" className="btn btn-outline-dark">Add new patient <FontAwesomeIcon icon={faPlus} /></Link>

                            </a>
                        </div>
                    </div>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 text-bg-light rounded-3">
                                <h2>View the existing patients.</h2>
                                <p>Get enrolled patient info here.</p>
                                {/* <button className="btn btn-outline-dark" type="button">
                                    View patients
                                </button> */}
                                <Link to="/viewdb" className="btn btn-outline-dark">View database <FontAwesomeIcon icon={faEye} /></Link>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-light rounded-3">
                                <h2>Download CSV</h2>
                                <p>Click here to get download the csv.</p>
                                {/* <button className="btn btn-outline-dark" type="button">
                                    Download CSV
                                </button> */}
                                <Link to="/downloadcsv" className="btn btn-outline-dark">Download CSV <FontAwesomeIcon icon={faDownload} />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </section>
    )

    return content
}
export default Welcome