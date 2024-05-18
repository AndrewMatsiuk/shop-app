import React, { useState } from "react";
import { Comment } from "../../types/comment";
import { Product } from "../../types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { productActions } from "../../redux/product/reducer";
import { CommentItem } from "./CommentItem";
import { Button, Flex, Input } from "antd";

type Props = {
	comments: Comment[];
	product: Product;
};

export const CommentList: React.FC<Props> = ({ comments, product }) => {
	const dispatch = useDispatch<AppDispatch>();
	const [newComment, setNewComment] = useState("");

	const deleteComment = (id: number) => {
		const commentList = comments.filter((comment) => comment.id !== id);
		dispatch(
			productActions.editProduct({
				product: { ...product, comments: commentList },
			}),
		);
	};

	const handleChange = (e: any) => {
		setNewComment(e.target.value);
	};

	const addComment = () => {
		if (newComment) {
			dispatch(
				productActions.editProduct({
					product: {
						...product,
						comments: [
							...comments,
							{
								date: new Date().toLocaleString(),
								description: newComment,
								productId: product.id,
								id: Date.now(),
							},
						],
					},
				}),
			);
			setNewComment("");
		}
	};
	return (
		<>
			{comments?.map((comment) => (
				<CommentItem comment={comment} onDelete={deleteComment} />
			))}
			<Flex style={{ marginTop: 20, flexDirection: "column", gap: 10 }}>
				<Input value={newComment} onInput={handleChange} />
				<Button type="primary" style={{ width: "30%" }} onClick={addComment}>
					Add Comment
				</Button>
			</Flex>
		</>
	);
};
