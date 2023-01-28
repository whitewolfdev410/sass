export type QuestionTypes =
	| "Paragraph"
	| "Short answer"
	| "YesNo"
	| "Dropdown"
	| "Multiple choice"
	| "Date"
	| "Number"
	| "File upload";

export type QuestionInputType = {
	type: QuestionTypes;
	question: string;
	choices?: string[];
};
