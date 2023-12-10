import { Button } from "react-bootstrap";

const addManageRow = () => {
    const ids : any = ["1","2","3"];
    localStorage.setItem('ids', ids);
}

export default function ManagingAdd()
{
    return (
        <Button onClick={addManageRow}>Click me</Button>
    )
}