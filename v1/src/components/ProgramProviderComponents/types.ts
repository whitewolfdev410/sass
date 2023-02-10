export type QuestionTypes =
  | "Paragraph"
  | "ShortAnswer"
  | "YesNo"
  | "Dropdown"
  | "MultipleChoice"
  | "Date"
  | "Number"
  | "FileUpload";

export type QuestionInputType = {
  id: string;
  type: QuestionTypes;
  question: string;
  disqualify?: boolean;
  choices?: any;
  maxChoice?: number;
  other: boolean;
};
