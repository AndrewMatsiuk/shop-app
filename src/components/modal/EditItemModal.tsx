import React from "react";
import { Modal, Form as AntdFrom, Button } from "antd";
import { Form } from "../forms";
import { Product } from "../../types/product";
import { showDeleteConfirm } from "./ConfirmDeleteModal";
import { CommentList } from "../comments";

type Props = {
	visible: boolean;
	onClose: () => void;
	onSubmit: (value: Product) => void;
	onDelete: () => void;
	product: Product;
};

export const EditItemModal: React.FC<Props> = ({
	visible,
	onClose,
	onSubmit,
	product,
	onDelete,
}) => {
	const [form] = AntdFrom.useForm();

	const onFinish = () => {
		onSubmit({ ...product, ...form.getFieldsValue(true) });
		reset();
	};

	const reset = () => {
		form.resetFields();
		onClose();
	};

	const openDeleteConfirmModal = () => {
		showDeleteConfirm({ onCancel: onClose, onOk: onDelete });
		reset();
	};
	return (
		<Modal open={visible} title="Edit Product" footer={null} onCancel={onClose}>
			<Form form={form} onFinish={onFinish} product={product} />
			<Button
				type="primary"
				htmlType="submit"
				style={{ width: "100%" }}
				danger
				onClick={openDeleteConfirmModal}
			>
				Delete
			</Button>
			<CommentList product={product} comments={product.comments} />
		</Modal>
	);
};
