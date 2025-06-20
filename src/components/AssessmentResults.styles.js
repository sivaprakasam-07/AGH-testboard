import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 16px;
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1300px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
`;

export const TitleGroup = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.p`
  color: red;
  margin-top: 0.25rem;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const SearchAndSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: stretch;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
    width: auto;
    align-items: center;
    gap: 1rem;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: none;
  flex-grow: 1;

  @media (min-width: 576px) {
    padding: 0.6rem 1rem;
    flex-grow: 0;
  }
`;

export const SearchIcon = styled.img`
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;

export const SearchInput = styled.input`
  padding: 0;
  border-radius: 8px;
  border: none;
  background-color: #f8f9fa;
  outline: none;
  font-size: 0.9rem;
  color: #A0A0A0;
  width: 100%;

  &::placeholder {
    color: #A0A0A0;
  }

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`;

export const SortSelect = styled.select`
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: none;
  background-color: #f8f9fa;
  font-size: 0.9rem;
  color: #333;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A0A0A0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1em;
  padding-right: 2rem;
  width: 100%;

  @media (min-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    width: auto;
  }
`;

export const Table = styled.div`
  margin-top: 1rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    padding: 0 1rem;
    overflow-x: visible;
  }
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr); // Now flexible to 6 columns
    font-weight: normal;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    color: grey;
  }
`;
