import { EditorState, RichUtils, convertToRaw } from "draft-js";
// @ts-ignore
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import BoldIcon from "../../assets/icons/bold.svg";
import UnderlineIcon from "../../assets/icons/underline.svg";
import ItalicIcon from "../../assets/icons/italic.svg";
import OrderedIcon from "../../assets/icons/ordered-list.svg";
import UnorderedIcon from "../../assets/icons/unordered-list.svg";
import InsertImageIcon from "../../assets/icons/insert-image.svg";
import LinkIcon from "../../assets/icons/link.svg";
import "../../styles/text-editor.css";

export type Props = {
	placeholder?: string;
	height?: string;
	name?: string;
	setData?: any;
	data?: any;
};

const TextEditor = ({ placeholder, height, setData, data, name }: Props) => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const handleKeyCommand = (command: any) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return "handled";
		}
		return "not-handled";
	};

	const onEditorStateChange = (newState: any) => {
		setEditorState(newState);
		setData({
			...data,
			[`${name}`]: draftToHtml(convertToRaw(newState.getCurrentContent())),
		});
	};

	return (
		<Editor
			editorState={editorState}
			wrapperClassName="text-editor-wrapper"
			toolbarClassName="text-editor-toolbar"
			handleKeyCommand={handleKeyCommand}
			onEditorStateChange={onEditorStateChange}
			toolbar={{
				options: ["inline", "list", "link", "image"],
				inline: {
					options: ["bold", "underline", "italic"],
					bold: { icon: BoldIcon },
					underline: { icon: UnderlineIcon },
					italic: { icon: ItalicIcon },
				},
				list: {
					options: ["ordered", "unordered"],
					ordered: { icon: OrderedIcon },
					unordered: { icon: UnorderedIcon },
				},
				link: {
					options: ["link"],
					link: { icon: LinkIcon },
				},
				image: {
					icon: InsertImageIcon,
					uploadCallback: (file: File) => ({
						data: {
							link: URL.createObjectURL(file),
						},
					}),
					previewImage: true,
				},
			}}
			placeholder={placeholder}
			editorStyle={{
				height,
			}}
		/>
	);
};

export default TextEditor;
