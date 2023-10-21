// Custom Components
import { Dropdown } from "@constants/components";
// Icons
import { MoreVertical } from "lucide-react";
// Types And Interfaces
type RowActionsProps = {
  hasContract: boolean;
};

function RowActions({ hasContract }: RowActionsProps) {
  return (
    <Dropdown
      groups={[
        {
          items: [
            {
              type: "content",
              content: {
                title: "View User",
                shortcut: "Ctrl + U",
              },
            },
          ],
        },
      ]}
    >
      <MoreVertical />
    </Dropdown>
  );
}

export default RowActions;
export type { RowActionsProps };
