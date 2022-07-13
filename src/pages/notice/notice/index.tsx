import React from "react";
import { useRouter } from "next/router";
import { Notice } from "@/components";

const NoticeView: React.FC = () => {
    const router = useRouter();

    const clickNoticeItem = (id: string) => {
        router.push(`/notice/${id}`);
    };

    const clickAddNotice = () => {
        router.push("/notice/notice/editor?mode=add");
    };

    return <Notice.Container clickNoticeItem={clickNoticeItem} clickAddNotice={clickAddNotice} />;
};

export default NoticeView;
