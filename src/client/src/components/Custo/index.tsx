import React, { useState, useEffect } from 'react';
import './customers.css';


interface Customer {
    id: number;
    first: string;
    last: string;
}

export interface Props {
    customer?: Customer;
}

const Custo: React.FC<Props> = () => {
    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        fetch('/api/customers')
            .then(res => {
                return res.json();
            }).catch(function (err) { console.log(err) })
            .then(data => {
                // this.setState({ customers: data })
                console.log(data)
            })

        fetch('/api/func')
            .then(res => {
                console.log(res.body)
                return res.json();
            }).catch(function (err) { console.log(err) })
            .then(data => {
                console.log(data)
                // this.setState({ func: data })
                console.log(data)
            })
    })

    return (<div>
        <h3>Customers</h3>
        {/* <ul>
                {this.state.customers.map(customer =>
                    <li key={customer.id}>{customer.first} {customer.last}</li>
                )
                }
            </ul> */}
        <h3>Func</h3>
        {/* <div>{this.state.func}</div> */}
    </div>);
}

export default Custo;