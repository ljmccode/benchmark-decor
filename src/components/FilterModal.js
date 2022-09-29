import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { FaTimes } from 'react-icons/fa';
import Filters from './Filters';

const FilterModal = () => {
  const { showFilterModal, toggleFilterModal } = useFilterContext();
  console.log(showFilterModal);
  return (
    <Wrapper>
      <div
        className={
          showFilterModal ? 'filter-modal show-filter-modal' : 'filter-modal'
        }
      >
        <div className='modal-container'>
          <div className='modal-top'>
            <button
              type='button'
              className='close-btn'
              onClick={toggleFilterModal}
            >
              <FaTimes />
            </button>
          </div>
          <div className='filters'>
            <Filters />
            <button className='apply-btn' onClick={toggleFilterModal}>
              apply
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterModal;

const Wrapper = styled.aside`
  @media (min-width: 767px) {
    display: none;
  }

  .filter-modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }

  .show-filter-modal {
    z-index: 99;
    opacity: 1;
  }

  .modal-container {
    background: white;
    width: 90vw;
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    padding-top: 1rem;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
  }

  .filters {
    padding-top: 2rem;
  }

  .modal-top {
    width: 90%;
    text-align: right;
    position: fixed;
  }

  .close-btn {
    color: darkred;
    border: none;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    position: relative;
    margin-right: 1rem;
  }

  .apply-btn {
    background: var(--clr-white);
    color: var(--clr-red-dark);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    cursor: pointer;
    text-transform: capitalize;
    background: transparent;
    border: 1px solid var(--clr-red-dark);
    letter-spacing: var(--spacing);
    margin-top: 0.5rem;
  }
`;
