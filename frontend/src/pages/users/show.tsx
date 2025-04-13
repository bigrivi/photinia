import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const UserShow = () => {
    const { query } = useShow({});
    const { data, isLoading } = query;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>{"ID"}</Title>
            <TextField value={record?.id} />
            <Title level={5}>{"Title"}</Title>
            <TextField value={record?.title} />
            <Title level={5}>{"Content"}</Title>
            <MarkdownField value={record?.content} />
            <Title level={5}>{"Category"}</Title>
            <TextField value={record?.category.title} />
            <Title level={5}>{"Status"}</Title>
            <TextField value={record?.status} />
            <Title level={5}>{"CreatedAt"}</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
};
