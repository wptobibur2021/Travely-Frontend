import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="not-found-img">
                            <img className="img-fluid" src="https://i.stack.imgur.com/6M513.png" alt="" />
                        </div>
                        <div className="not-found-btn text-center pb-5">
                            <NavLink to="/" className='btn btn-success'>Go to Home Page</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
