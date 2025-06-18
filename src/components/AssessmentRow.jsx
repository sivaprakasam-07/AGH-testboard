// import { Row, Button, DownloadIconContainer } from "./AssessmentRow.styles"; // Updated import
// import DownloadIconSvg from "../assets/downloadIcon.svg";

// const AssessmentRow = ({ data }) => {
//     if (!data) {
//         console.error("AssessmentRow: data prop is missing or undefined. This row will not be rendered.");
//         return null;
//     }

//     // Helper to create labeled data for card view
//     const renderDataPoint = (label, value) => (
//         <p><strong>{label}: </strong>{value}</p>
//     );

//     return (
//         <Row>
//             {/* Conditional rendering for labels based on screen size can be complex with styled-components alone.
//                 For simplicity, we'll render labels always and hide them with CSS for larger screens.
//                 Alternatively, one could use a window resize listener, but that's more involved. */}
//             {renderDataPoint("Assessment Name", data.name)}
//             {renderDataPoint("Assigned To", "CSE UG 2024")}
//             {renderDataPoint("Start Time", data.start)}
//             {renderDataPoint("End Time", data.end)}

//             <div className="action-container"> {/* Added className for styling hook */}
//                 <Button>View Performance</Button>
//                 <DownloadIconContainer> {/* Use the new container */}
//                     <img src={DownloadIconSvg} alt="Download" />
//                 </DownloadIconContainer>
//             </div>
//         </Row>
//     );
// };

// export default AssessmentRow;


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
