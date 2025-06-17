import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #ff385c;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

export const DownloadIcon = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
`;
