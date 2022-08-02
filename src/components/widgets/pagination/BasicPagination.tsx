import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface BasicPaginationProps {
    total: number;
}

const BasicPagination: React.FC<BasicPaginationProps> = (props) => {
    return (
        <Stack spacing={2}>
            <Pagination
                count={props.total}
                onChange={(_, page) => {
                    console.log(page, "이건가?");
                }}
            />
        </Stack>
    );
};

export default BasicPagination;
