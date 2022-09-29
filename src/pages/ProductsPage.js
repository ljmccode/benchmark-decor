import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import FilterButtons from '../components/FilterButtons';
import FilterModal from '../components/FilterModal';

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <div className='filter-container'>
            <Filters />
          </div>
          <div className='filter-buttons'>
            <FilterButtons />
          </div>
          <FilterModal />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    margin: 2rem auto;
  }

  @media (max-width: 767px) {
    .filter-container {
      display: none;
    }
    .filter-buttons {
      display: grid;
    }
  }

  @media (min-width: 768px) {
    .products {
      display: grid;
      gap: 3rem 1.5rem;
      margin: 4rem auto;
      grid-template-columns: 200px 1fr;
    }
    .filter-container {
      display: flex;
    }
    .filter-buttons {
      display: none;
    }
  }
`;

export default ProductsPage;
