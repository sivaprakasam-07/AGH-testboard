import styled from "styled-components";

export const Row = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  p > strong {
    color: #555;
  }

  .action-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
    margin-top: 0.5rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr); // Match the header
    padding: 1rem;
    border-bottom: 1px solid #eee;
    border-radius: 0;
    margin-bottom: 0;
    align-items: center;
    gap: 0;

    p {
      display: block;
      font-size: 1rem;
    }

    p > strong {
      display: none;
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
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    padding: 0.5rem 1.5rem;
  }
`;

export const DownloadIconContainer = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 0.5rem 0;

  img {
    width: 20px;
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
