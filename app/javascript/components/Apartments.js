import React, { Component } from "react"
import {
    Card, CardBody, CardHeader, Button,
} from 'reactstrap';

const Apartments = (props) => {
    console.log(props);
    return (
            props.apartments.map(v => {
                return (
                    <Card>
                        <CardBody>
                            <CardHeader>
                                {v.street}
                            </CardHeader>
                            <CardBody>
                                {v.city}
                                <br></br>
                                {v.postal}
                                <br></br>
                                {v.country}
                                <br></br>
                                {v.price}
                                <br></br>
                                {v.manager_name}
                                <br></br>
                                {v.manager_phone}
                                <br></br>
                                {v.contact_hours}
                                <br></br>
                                {v.description}
                                <br></br>
                            </CardBody>
                            <Button onClick={() => (location.replace(`/apartments/${v.id}`))}>More info</Button>
                        </CardBody>
                    </Card>
                )
            })
    );
};

export default Apartments