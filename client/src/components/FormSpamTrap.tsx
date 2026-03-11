import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormSpamTrapProps {
  fieldId: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FormSpamTrap({ fieldId, value, onChange }: FormSpamTrapProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
    >
      <Label htmlFor={fieldId}>Website</Label>
      <Input
        id={fieldId}
        name={fieldId}
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
