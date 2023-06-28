import { useQuery } from '@apollo/client';
import React from 'react'
import { getCompanysummry } from '../query';
import {
    Card, CardHeader, CardBody, CardText
} from 'reactstrap';
import './summary.scss'

function Summary () {
    const { data } = useQuery(getCompanysummry);
    console.log('Sdata', data)
    return (
        <>
            <div className='main_summry'>
                <Card>
                    <CardHeader tag="h3">Summary</CardHeader>
                    <CardBody>
                        <CardText>{data?.company?.summary}</CardText>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Summary