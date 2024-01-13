import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Select } from '@/components/widgets';
import useDebounce from '@/hooks/useDebounce';

interface IProps {
  searchKeyword: string;
  options: { name: string; field: string }[];
  onChangeSearch: (keyword: string) => void;
  onClickOption: (field: string) => void;
}

const SearchBarLayout = styled.div`
  display: flex;
  width: 339px;
  height: 48px;
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

const SearchBar: React.FC<IProps> = ({
  searchKeyword,
  options,
  onChangeSearch,
  onClickOption,
}) => {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 300);

  useEffect(() => {
    onChangeSearch(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <SearchBarLayout>
      <Select.Selector options={options} onClickOption={onClickOption} />
      <SearchBarInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </SearchBarLayout>
  );
};

export default SearchBar;
