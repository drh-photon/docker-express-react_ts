import React, { Component } from 'react';


export default class Customers extends Component {
    state = { customers: [] }

    componentDidMount() {
        fetch('/api/customers', function(req, res){console.log(req)})
            .then(res => { 
                JSON.parse(res);
                console.log(res)
                // res.json();
                
            }).catch(function(err){console.log(err)})
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