import EditFormGroup from "components/form/EditFormGroup";
import React from "react";

export default function RegisterForm({
  data = {},
  onChange = () => {},
  // define onchange parameter 'state', 'event', 'name-value'
  type = "state",
}) {
  return (
    <div>
      <EditFormGroup
        data={data}
        onChange={onChange}
        type={type}
        layout={[
          { name: "email", label: "Email", type: "email", size: "small" },
          {
            name: "password",
            label: "Password",
            type: "password",
            size: "small",
          },
        ]}
        direction="column"
      />
    </div>
  );
}
