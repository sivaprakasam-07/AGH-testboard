import { Row, Button, DownloadIcon } from "./AssessmentRow.styles";

const AssessmentRow = ({ data }) => {
    // Add a guard clause to handle cases where data might be undefined
    if (!data) {
        console.error("AssessmentRow: data prop is missing or undefined. This row will not be rendered.");
        return null; // Prevent rendering if data is not available
    }
    return (
        <Row>
            <p>{data.name}</p>
            <p>CSE UG 2024</p>
            <p>{data.start}</p>
            <p>{data.end}</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Button>View Performance</Button>
                <DownloadIcon>⬇</DownloadIcon>
            </div>
        </Row>
    );
};

export default AssessmentRow;
