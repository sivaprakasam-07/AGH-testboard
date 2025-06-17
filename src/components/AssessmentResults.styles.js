import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem; // Default padding for smaller screens
  background-color: #fff;
  border-radius: 16px;
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%; // Default max-width for smaller screens

  @media (min-width: 768px) { // Tablet and above
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1300px; 
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically by default
  align-items: center; // Center items when stacked
  gap: 1rem; // Add gap when stacked
  margin-bottom: 1.5rem;

  @media (min-width: 768px) { // Tablet and above
    flex-direction: row; // Row layout for larger screens
    justify-content: space-between;
    align-items: center;
    gap: 0; // Reset gap, space-between will handle it
  }
`;

export const TitleGroup = styled.div`
  text-align: center; // Center title text on smaller screens
  @media (min-width: 768px) {
    text-align: left; // Align left on larger screens
  }
`;

export const Heading = styled.h2`
  font-size: 1.25rem; // Adjusted for smaller screens
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem; // 24px
  }
`;

export const SubHeading = styled.p`
  color: red;
  margin-top: 0.25rem; // 4px
  font-weight: 500;
  margin-bottom: 0;
  font-size: 0.875rem; // Adjusted for smaller screens

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const SearchAndSortContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack search and sort on smaller screens
  gap: 0.75rem; 
  align-items: stretch; // Make children take full width of this container
  width: 100%; // Take full width on smaller screens

  @media (min-width: 576px) { // Small devices and up
    flex-direction: row;
    width: auto; // Auto width for larger screens
    align-items: center;
    gap: 1rem;
  }
`;

export const SearchInputContainer = styled.div` 
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 0.5rem 0.75rem; // Adjusted padding
  border-radius: 8px;
  border: none; 
  flex-grow: 1; // Allow search to grow if needed

  @media (min-width: 576px) {
    padding: 0.6rem 1rem;
    flex-grow: 0; // Reset grow on larger screens
  }
`;

export const SearchIcon = styled.img` // Style for the icon
  margin-right: 0.5rem;
  width: 16px; // Adjust as needed
  height: 16px; // Adjust as needed
`;

export const SearchInput = styled.input`
  padding: 0;
  border-radius: 8px;
  border: none; 
  background-color: #f8f9fa; 
  outline: none; 
  font-size: 0.9rem; // Adjusted font size
  color: #A0A0A0; 
  width: 100%; // Ensure input takes available space in its container
  &::placeholder {
    color: #A0A0A0; 
  }
  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

export const SortSelect = styled.select`
  padding: 0.5rem 0.75rem; // Adjusted padding
  border-radius: 8px;
  border: none; 
  background-color: #f8f9fa; 
  font-size: 0.9rem; // Adjusted font size
  color: #333; 
  appearance: none; 
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A0A0A0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1em;
  padding-right: 2rem; 
  width: 100%; // Full width on smaller screens when stacked

  @media (min-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    width: auto; // Auto width on larger screens
  }
`;


export const Table = styled.div`
  margin-top: 1rem;
  padding: 0; // Remove horizontal padding for mobile, rows will handle it
  overflow-x: auto; // Allow horizontal scrolling for the table on small screens

  @media (min-width: 768px) {
    padding: 0 1rem; 
    overflow-x: visible;
  }
`;

export const TableHeader = styled.div`
  display: none; // Hide table header on small screens (card view will have labels)
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
    font-weight: normal;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    color: grey; 
  }
`;
