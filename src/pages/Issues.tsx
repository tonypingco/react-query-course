import { useState } from "react";

import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { Label } from "interfaces/index";

export default function Issues() {
  const [labels, setLabels] = useState<Label[]>([]);

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          {/* @ts-ignore FIXME: check this type later */}
          <IssuesList labels={labels} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(label: Label) =>
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              )
            }
          />
        </aside>
      </main>
    </div>
  );
}
