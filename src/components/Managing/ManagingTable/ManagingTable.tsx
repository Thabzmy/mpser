import Table from 'react-bootstrap/Table';
import ManagingHooks from '../../../hooks/Managing/ManagingHooks';


export default function ManagingTable() {
    const ids = ManagingHooks();
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>test</th>
                </tr>
            </thead>
            <tbody>
                {
                    ids.map((val) => {
                        return (
                            <tr><td>{val}</td></tr>
                        );
                    })
                }
            </tbody>
        </Table>
    )
}