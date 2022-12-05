import React from 'react'
import DashHeader from '../../components/DashHeader'
import img1 from '../../images/anshul1.jpg'
import img2 from '../../images/nish1.jpg'
import img3 from '../../images/avinash2.jpg'

const Techteam = () => {
    return (

        <>
            <DashHeader />

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">TECH SUPPORT</h1>
                        <p className="lead text-muted">
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don’t simply skip over it entirely.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">
                                Main call to action
                            </a>
                            <a href="#" className="btn btn-secondary my-2">
                                Secondary action
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                              xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                              preserveAspectRatio="xMidYMid slice" focusable="false">
                              <title>Placeholder</title>
                              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%"
                                  fill="#eceeef" dy=".3em">Thumbnail</text>
                          </svg>*/}
                                <img
                                    src={img2}
                                    alt="nishanth"
                                    height={400}
                                    width={420}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>Nishanth R Negali</b><br />
                                        Email:
                                        <a href="mailto:nishanth13.rajesh@gmail.com"> nishanth13.rajesh@gmail.com</a>

                                        <br />
                                        Contact: +91 7019796680<br />

                                    </p>
                                    {/* <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                              xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                              preserveAspectRatio="xMidYMid slice" focusable="false">
                              <title>Placeholder</title>
                              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%"
                                  fill="#eceeef" dy=".3em">Thumbnail</text>
                          </svg>*/}
                                <img
                                    src={img1}
                                    alt="anshul"
                                    height={400}
                                    width={420}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>Anshul Mishra</b><br />
                                        Email:
                                        <a href="mailto:anshul@gmail.com"> anshul@gmail.com</a>
                                        <br />
                                        Contact: +91 9911514357<br />
                                    </p>
                                    {/* <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                {/*<svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                              xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                              preserveAspectRatio="xMidYMid slice" focusable="false">
                              <title>Placeholder</title>
                              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%"
                                  fill="#eceeef" dy=".3em">Thumbnail</text>
                          </svg>*/}
                                <img
                                    src={img3}
                                    alt="avinash"
                                    height={400}
                                    width={420}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>Avinash Yuvraj</b><br />
                                        Email:
                                        <a href="mailto:avinash@gmail.com"> avinash@gmail.com</a>
                                        <br />
                                        Contact: +91 9739071762<br />
                                    </p>
                                    {/* <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>


    )
}

export default Techteam