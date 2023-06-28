import React from "react";
import { useQuery, useApolloClient } from '@apollo/client';
import { getCompanydetails } from '../query'
import { Table } from 'reactstrap';
import './dash.scss'

function Dashboard () {

    const { data } = useQuery(getCompanydetails);
    const client = useApolloClient();


    // Read data from the cache
    const cachedData = client.readQuery({
        query: getCompanydetails,
    });

    // Write data to the cache
    const newData = {
        ...cachedData?.company,
        company: {
            ...cachedData,
            newAIProduct: 'Chat GPT',
        },
    };

    console.log('newData', newData)
    return (
        <>
            <div className="main_table">
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>ceo</td>
                                <td>{data?.company?.ceo}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>coo</td>
                                <td>{data?.company?.coo}</td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>cto propulsion</td>
                                <td>{data?.company?.cto_propulsion}</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>New AI Product</td>
                                <td>{newData?.company?.newAIProduct}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
export default Dashboard