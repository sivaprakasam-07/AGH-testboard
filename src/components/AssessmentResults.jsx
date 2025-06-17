import {
    Container,
    Heading, // Added Heading back
    SubHeading, // Added SubHeading back
    TableHeader,
    Table,
    TopBar,
    SearchInput,
    SortSelect,
    SearchAndSortContainer,
    TitleGroup,
    SearchInputContainer, // Import new container
    SearchIcon // Import SearchIcon style
} from "./AssessmentResults.styles";
import AssessmentRow from "./AssessmentRow";
import searchIconSvg from "../assets/search-icon.svg"; // Import the SVG

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
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
    },
    {
        name: "Time & Work",
        start: "11 January 2025 21:30",
        end: "13 January 2025 21:30"
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
            <TopBar>
                <TitleGroup>
                    <Heading>Assessment Results</Heading>
                    <SubHeading>Aptitude Assessment</SubHeading>
                </TitleGroup>
                <SearchAndSortContainer>
                    <SearchInputContainer> {/* Wrap search input and icon */}
                        <SearchIcon src={searchIconSvg} alt="Search" />
                        <SearchInput type="text" placeholder="Search" />
                    </SearchInputContainer>
                    <SortSelect>
                        <option value="newest">Sort by : Newest</option>
                        <option value="oldest">Sort by : Oldest</option>
                    </SortSelect>
                </SearchAndSortContainer>
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
