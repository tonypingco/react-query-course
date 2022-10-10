export type TODO_TYPEME = any;

type Label = {
  id: string;
  name: string;
  color: string;
};

export type IssueItemProps = {
  id?: string;
  title: string;
  number: number;
  status: string;
  assignee: string;
  comments?: string[];
  commentCount?: number | any;
  createdBy: string;
  createdDate: Date;
  labels: Label[];
};
