import { useFilterContext } from '../context/filter_context';
import styled from 'styled-components';

const Search = () => {
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();

  return (
    <Wrapper className='form-control'>
      <input
        type='text'
        name='text'
        placeholder='search'
        className='search-input'
        value={text}
        onChange={updateFilters}
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  margin-bottom: 1.25rem;

  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
`;
