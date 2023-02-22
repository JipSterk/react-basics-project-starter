import { Input } from "./ui/TextInput";

export const TextInput = ({ onChange, ...props }) => (
  <Input variant="flushed" onChange={onChange} {...props} />
);
