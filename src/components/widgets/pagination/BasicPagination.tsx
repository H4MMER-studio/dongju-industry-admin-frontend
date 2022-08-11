import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

interface BasicPaginationProps {
    total: number;
    clickPage: (page: number) => void;
}

const Layout = styled.div`
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
        background-color: #2979ff;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        color: #fff;
    }
`;

const BasicPagination: React.FC<BasicPaginationProps> = ({ total, clickPage }) => {
    return (
        <Layout>
            <Stack spacing={2}>
                <Pagination
                    count={total}
                    onChange={(_, page) => {
                        clickPage(page);
                    }}
                />
            </Stack>
        </Layout>
    );
};

export default BasicPagination;
