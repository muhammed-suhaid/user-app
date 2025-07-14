import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewUser = () => {
    const [userData, changeUserData] = useState(
        []
    )

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => { changeUserData(response.data) })
            .catch()
    }
    useEffect(() => { fetchData() }, {})
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Street</th>
                                    <th scope="col">Sutite</th>
                                    <th scope="col">City</th>
                                    <th scope="col">ZipCode</th>
                                    <th scope="col">Latitude</th>
                                    <th scope="col">Longitude</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Company catchPhrase</th>
                                    <th scope="col">Bs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                            <td>{data.address.street}</td>
                                            <td>{data.address.suite}</td>
                                            <td>{data.address.city}</td>
                                            <td>{data.address.zipcode}</td>
                                            <td>{data.address.geo.lat}</td>
                                            <td>{data.address.geo.lng}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.website}</td>
                                            <td>{data.company.name}</td>
                                            <td>{data.company.catchPhrase}</td>
                                            <td>{data.company.bs}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser