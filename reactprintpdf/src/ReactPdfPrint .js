import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';


const ReactPdfPrint = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print success')

    });

    const data = [
        {
            "ID": "1",
            "JobTitle": "HR Coordinator",
            "EmailAddress": "Sarah_Harris7424@lyvnc.auction",
            "FirstNameLastName": "Sarah Harris"
        },
        {
            "ID": "2",
            "JobTitle": "Software Engineer",
            "EmailAddress": "Logan_Marshall3824@dbxli.us",
            "FirstNameLastName": "Logan Marshall"
        },
        {
            "ID": "3",
            "JobTitle": "Cashier",
            "EmailAddress": "Mark_Khan926@mpibr.store",
            "FirstNameLastName": "Mark Khan"
        },
        {
            "ID": "4",
            "JobTitle": "CNC Operator",
            "EmailAddress": "Cedrick_Beal534@gkvds.name",
            "FirstNameLastName": "Cedrick Beal"
        },
        {
            "ID": "5",
            "JobTitle": "Service Supervisor",
            "EmailAddress": "Dorothy_Norton7863@qu9ml.online",
            "FirstNameLastName": "Dorothy Norton"
        },
    ]

return (
    <>
        <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <h1 className="text-center my-3 border py-2">Employee data </h1>
            <Table className="w-75 mx-auto" bordered>
                <thead>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                            {data.map((item, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{item.FirstNameLastName}</td>
                                        <td>{item.EmailAddress}</td>
                                    </tr>
                                )
                            })}
                </tbody>
            </Table>
        </div>
        <Button style={{background:"green"}} variant ="Success" onClick={handlePrint}>Print this out</Button>

    </>
)
}

export default ReactPdfPrint;