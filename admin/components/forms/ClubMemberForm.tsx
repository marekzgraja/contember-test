import * as React from "react";
import {
  CheckboxField,
  Component,
  HiddenField,
  Select,
  SelectField,
  TextField,
} from "@contember/admin";

export const ClubMemberForm = Component(() => (
  <>
    <HiddenField field="personId" />
    <TextField field="name" label="Name" required />
    <TextField field="email" label="Email" required />
    <TextField field="phoneNumber" label="Phone number" />
    <SelectField
      field="transportPreference"
      label="Transport preference"
      options={[
        {
          value: "need_ride",
          label: "I need a ride",
        },
        {
          value: "car",
          label: "I'll take a car",
        },
      ]}
    />
  </>
));
