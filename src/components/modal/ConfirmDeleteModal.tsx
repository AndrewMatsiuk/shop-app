import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

type Props = {
	onOk: () => void;
	onCancel: () => void;
};

export const showDeleteConfirm = ({ onCancel, onOk }: Props) => {
	confirm({
		title: "Are you sure delete this task?",
		icon: <ExclamationCircleFilled />,
		content: "Some descriptions",
		okText: "Yes",
		okType: "danger",
		cancelText: "No",
		onOk,
		onCancel,
	});
};
