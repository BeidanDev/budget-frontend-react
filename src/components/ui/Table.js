import moment from 'moment';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const operations = [
    {
        id: '1',
        concept: 'Job 1',
        amount: '233',
        date: moment().toDate().toString()
    },
    {
        id: '2',
        concept: 'Job 2',
        amount: '243',
        date: moment().toDate().toString()
    },
    {
        id: '3',
        concept: 'Job 3',
        amount: '253',
        date: moment().toDate().toString()
    }
];

const columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'concept',
        text: 'Concept'
    },
    {
        dataField: 'amount',
        text: 'Amount'
    },
    {
        dataField: 'date',
        text: 'Date'
    },
    {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div>
                    <button className="btn btn-secondary mr-2">
                        Update
                    </button>
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </div>
            )
        }
    }
];

export const Table = () => {
    return (
        <BootstrapTable keyField='id' data={ operations } columns={ columns } />
    )
}
