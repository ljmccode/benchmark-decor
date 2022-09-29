import Search from './Search';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const FilterButtons = () => {
  const { toggleFilterModal } = useFilterContext();
  return (
    <Wrapper>
      <Search />
      <button onClick={toggleFilterModal}>filters</button>
    </Wrapper>
  );
};

export default FilterButtons;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  justify-content: center;

  button {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    cursor: pointer;
    text-transform: capitalize;
    border: none;
    letter-spacing: var(--spacing);
    width: 165px;
    height: 35px;
    margin: 0 auto;
  }
`;
