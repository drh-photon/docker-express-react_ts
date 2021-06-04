import React, { Component } from 'react';

export default class Customers extends Component {
    state = { customers: [] }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => { 
                console.log(res);
                // res.json();
                
            })
            // .then(customers => this.setState({ customers }, () => {
            //     console.log(customers)
            // }
            // ))
    }
    render() {
        return (<div>
            <h1>Customers</h1>
            <ul>
                {this.state.customers.map(customer =>
                    <li key={customer.id}>{customer.first} {customer.last}</li>
                )}
            </ul>

        </div>);
    }
}