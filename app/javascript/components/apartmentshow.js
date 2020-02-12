import React from 'react'

const ApartmentShow = (props) => {
    let { id } = props.match.params
    let apartment = props.apartments.find(value => {
        return value.id === +id
    })
    console.log(apartment);
    
    return (
        <h1>I work, thank you very much</h1>
    );
}
export default ApartmentShow