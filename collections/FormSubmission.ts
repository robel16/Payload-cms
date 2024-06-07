import { CollectionConfig } from "payload/types";
const FormSubmission: CollectionConfig = {
  slug: "form-submission",
  fields: [
    {
      type: "text",
      name: "form",
      label: "from Email",
      admin: {
        readOnly: true,
      },
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      admin: {
        readOnly: true,
      },
    },
    {
      type: "text",
      name: "source",
      label: "Source",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
  ],
};
export default FormSubmission;
