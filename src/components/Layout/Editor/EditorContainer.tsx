import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CKEditor from "./CKEditor";

const EditorContainerLayout = styled.div`
    width: 100%;
    padding-top: 24px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;

    .ck-content {
        width: 100%;
        height: calc(100vh - 84px);
    }
`;

const EditorContainer: React.FC = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <EditorContainerLayout>
            <CKEditor
                name="description"
                value=""
                onChange={(data) => {
                    setData(data);
                }}
                editorLoaded={editorLoaded}
            />
        </EditorContainerLayout>
    );
};

export default EditorContainer;
