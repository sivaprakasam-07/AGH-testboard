import { Row, Button, DownloadIconContainer } from "./AssessmentRow.styles";
import DownloadIconSvg from "../assets/downloadIcon.svg";

const AssessmentRow = ({ data }) => {
    if (!data) {
        console.error("AssessmentRow: data prop is missing or undefined.");
        return null;
    }

    const renderDataPoint = (label, value) => (
        <p><strong>{label}: </strong>{value}</p>
    );

    return (
        <Row>
            {renderDataPoint("Assessment Name", data.name)}
            {renderDataPoint("Assigned To", "CSE UG 2024")}
            {renderDataPoint("Start Time", data.start)}
            {renderDataPoint("End Time", data.end)}
            {renderDataPoint("Date", data.date)}



            <div className="action-container">
                <Button>View Performance</Button>
                <DownloadIconContainer>
                    <img src={DownloadIconSvg} alt="Download" />
                </DownloadIconContainer>
            </div>
        </Row>
    );
};

export default AssessmentRow;
