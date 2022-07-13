import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CKEditor from "./CKEditor";

const EditorContainerLayout = styled.div``;

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
