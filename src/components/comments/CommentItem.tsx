import React from "react";
import { Flex, Tag } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Comment } from "../../types/comment";

type Props = {
	comment: Comment;
	onDelete: (id: number) => void;
};

export const CommentItem: React.FC<Props> = ({ comment, onDelete }) => {
	return (
		<div style={{ marginTop: 10 }}>
			<Flex align="flex-start" justify="space-between" gap={10}>
				<div style={{ fontWeight: "bold" }}>{comment.description}</div>
				<CloseCircleOutlined
					style={{ cursor: "pointer" }}
					onClick={() => {
						onDelete(comment.id);
					}}
				/>
			</Flex>

			<div style={{ fontWeight: "normal" }}>{comment.date}</div>
		</div>
	);
};
