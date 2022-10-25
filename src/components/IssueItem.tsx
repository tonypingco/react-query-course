import { Link } from "react-router-dom";
import { GoIssueOpened, GoIssueClosed, GoComment } from "react-icons/go";
import { relativeDate } from "helpers/relativeDate";
import { IssueItemProps, LabelType, TODO_TYPEME } from "interfaces/index";
import { useUserData } from "helpers/useUserData";
import { Label } from "./Label";

export function IssueItem({
  title,
  number,
  assignee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}: IssueItemProps) {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);
  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>

          {labels.map((label: LabelType) => (
            <Label key={label.name} label={label.id} />
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)}{" "}
          {createdByUser.isSuccess ? `by ${createdByUser.data.name}` : ""}
        </small>
      </div>
      {assignee ? (
        <img
          src={
            assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
          }
          className="assigned-to"
          alt={`Assigned to ${
            assigneeUser.isSuccess ? assigneeUser.data.name : "avatar"
          }`}
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}
