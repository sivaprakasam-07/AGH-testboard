import styled from "styled-components";

export const Row = styled.div`
  background-color: #fff; // Card background
  border: 1px solid #eee; // Card border
  border-radius: 8px; // Card border radius
  padding: 1rem;
  margin-bottom: 1rem; // Space between cards
  display: flex; // Use flex for vertical stacking of items
  flex-direction: column;
  gap: 0.75rem; // Space between items in a card

  p {
    margin: 0; // Remove default paragraph margins
    display: flex;
    justify-content: space-between; // Align label and value
    font-size: 0.9rem;
  }

  p > strong { // Style for labels
    color: #555;
  }

  .action-container {
    display: flex;
    flex-direction: column; // Stack button and icon on small screens
    gap: 0.75rem;
    align-items: stretch; // Make button full width
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) { // Tablet and above - revert to grid
    display: grid;
    grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0;
    margin-bottom: 0;
    align-items: center;
    gap: 0;

    p {
      display: block; // Revert p display for grid
      justify-content: flex-start;
      font-size: 1rem;
    }

    p > strong {
      display: none; // Hide labels in grid view
    }

    .action-container {
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      margin-top: 0;
    }
  }
`;

export const Button = styled.button`
  background-color: #ff385c;
  color: white;
  padding: 0.6rem 1rem; // Adjusted padding for touch
  border: none;
  border-radius: 25px; 
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem; 
  text-align: center;
  width: 100%; // Full width by default for stacked layout

  @media (min-width: 768px) {
    width: auto; // Auto width for grid layout
    padding: 0.5rem 1.5rem; 
  }
`;

export const DownloadIconContainer = styled.div` // New container for the icon
  cursor: pointer;
  text-align: center; // Center icon when stacked
  padding: 0.5rem 0; // Add some padding for touch
  
  img {
    width: 20px; // Slightly larger icon
    height: 20px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 0;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
