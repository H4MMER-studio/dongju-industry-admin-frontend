import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface BasicPaginationProps {
    total: number;
    clickPage: (page: number) => void;
}

const BasicPagination: React.FC<BasicPaginationProps> = ({ total, clickPage }) => {
    return (
        <Stack spacing={2}>
            <Pagination
                count={total}
                onChange={(_, page) => {
                    clickPage(page);
                }}
            />
        </Stack>
    );
};

export default BasicPagination;
