import React from "react";
import styled from "styled-components";
import { Select } from "@/components/widgets";

interface IProps {
    options: { name: string; value: string }[];
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

const SearchBar: React.FC<IProps> = ({ options }) => {
    return (
        <SearchBarLayout>
            <Select.Selector options={options} />
            <SearchBarInput />
        </SearchBarLayout>
    );
};

export default SearchBar;
