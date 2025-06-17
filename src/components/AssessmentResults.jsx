import {
    Container,
    Heading,
    SubHeading,
    TableHeader,
    Table,
    TopBar,
    SearchInput,
    SortSelect
} from "./AssessmentResults.styles";
import AssessmentRow from "./AssessmentRow";

const assessments = [
    {
        name: "Number System",
        start: "03 June 2025 21:30",
        end: "4 June 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    // Add more as needed
];

const AssessmentResults = () => {
    return (
        <Container>
            <Heading>Assessment Results</Heading>
            <SubHeading>Aptitude Assessment</SubHeading>

            <TopBar>
                <SearchInput type="text" placeholder="Search" />
                <SortSelect>
                    <option>Newest</option>
                    <option>Oldest</option>
                </SortSelect>
            </TopBar>

            <Table>
                <TableHeader>
                    <p>Assessment Name</p>
                    <p>Assigned To</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                    <p>Action</p>
                </TableHeader>

                {assessments.map((a, index) => (
                    <AssessmentRow key={index} data={a} />
                ))}
            </Table>
        </Container>
    );
};

export default AssessmentResults;
