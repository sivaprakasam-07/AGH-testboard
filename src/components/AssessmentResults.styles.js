import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 16px;
  margin: 2rem;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const SubHeading = styled.p`
  color: red;
  margin-top: 4px;
  font-weight: 500;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

export const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SortSelect = styled.select`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const Table = styled.div`
  margin-top: 1rem;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 2fr 1fr;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;
