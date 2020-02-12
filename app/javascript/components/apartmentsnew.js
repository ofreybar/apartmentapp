import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    NavLink as Link, 
} from 'reactstrap';

class ApartmentsNew extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            form:{
                street: '',
                city: '',
                postal: '',
                country: '',
                price: '',
                manager_name: '',
                manager_phone: '',
                contact_hours: '',
                description: '',
                user_id: props.current_user.id
            }
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.form)
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    render(){

        let { street, city, postal, country, price, manager_name, manager_phone, contact_hours, description } = this.state.form

        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleAddress">Street</Label>
                        <Input onChange={this.handleChange} type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input onChange={this.handleChange} type="text" name="city" id="exampleCity" placeholder="San Diego" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePostal">Postal</Label>
                        <Input onChange={this.handleChange} type="text" name="postal" id="examplePostal" placeholder="92122" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCountry">Country</Label>
                        <Input onChange={this.handleChange} type="text" name="country" id="exampleAddress" placeholder="United States" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePrice">Price</Label>
                        <Input onChange={this.handleChange} type="text" name="price" id="examplePrice" placeholder="$" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleManager_name">Manager Name</Label>
                        <Input onChange={this.handleChange} type="text" name="manager_name" id="exampleManager_name" placeholder="John Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleManager_phone">Manager Phone</Label>
                        <Input onChange={this.handleChange} type="text" name="manager_phone" id="exampleManager_phone" placeholder="(123) 456-7890" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleContact_hours">Contact Hours</Label>
                        <Input onChange={this.handleChange} type="text" name="contact_hours" id="exampleContact_hours" placeholder="8am - 8pm" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDescription">Description</Label>
                        <Input onChange={this.handleChange} type="description" name="text" id="exampleDescription" />
                    </FormGroup>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Confirm Apartment</button>
                </Form>
            </div>
        )
    }
}

export default ApartmentsNew