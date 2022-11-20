import styled from 'styled-components';
import searchIcon from '../assets/icon-search.svg';

const SearchInput = ({ searchValue, handleChange, handleSubmit, userData, error }) => {
  return (
    <SearchInputContainer>
      <SearchIcon src={searchIcon} alt='search-icon' />
      <InputForm onSubmit={handleSubmit}>
        <SearchInputField
          type='text'
          value={searchValue}
          onChange={handleChange}
          id='github-search'
          placeholder='Search Github username...'
        />
      </InputForm>
      <NoResults>{error && error}</NoResults>
      <SearchButton type='submit' onClick={handleSubmit}>
        Search
      </SearchButton>
    </SearchInputContainer>
  );
};

const SearchInputContainer = styled.div`
  margin-top: 35px;
  position: relative;
`;

const SearchInputField = styled.input`
  width: 100%;
  height: 69px;
  border-radius: 15px;
  border: none;
  padding: 23px 0 24px 32px;
  box-shadow: ${props => props.theme.boxShadow};
  cursor: pointer;
  background: ${props => props.theme.inputColor};
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${props => props.theme.inputText};
  padding-left: 80px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: ${props => props.theme.text};
  }

  @media (max-width: 375px) {
    width: 326px;
    height: 60px;
    font-size: 13px;
    padding: 23px 24px 24px 32px;

    &::placeholder {
      font-size: 13px;
    }
  }
`;

const InputForm = styled.form`
  @media (max-width: 775px) {
  }
`;

// no results
const NoResults = styled.p`
  position: absolute;
  left: 68.22%;
  right: 19.18%;
  top: calc(50% - 22px / 2 + 0.5px);

  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #f74646;
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 23px;
  left: 32px;

  @media (max-width: 375px) {
    top: 23px;
    left: 10px;

    width: 16px;
    height: 16px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 9.5px;
  right: 10px;
  border: none;
  color: #ffff;
  background: #0079ff;
  border-radius: 10px;
  padding: 12.5px 23px 13.5px 24px;
  cursor: pointer;

  &:hover {
    background: #60abff;
  }

  @media (max-width: 375px) {
    width: 84px;
    height: 46px;
    padding: 12.5px 18px 13.5px 18px;
    top: 7px;
    right: 10px;
  }
`;

export default SearchInput;
