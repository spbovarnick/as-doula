import { useFormStatus } from "react-dom";

type SubmitBtnProps = {
  label: string;
  loading: React.ReactNode;
};

const FormSubmitBtn = ({ label, loading }: SubmitBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="border-2"
    >
      {pending ? loading : label}
    </button>
  );
};

export { FormSubmitBtn };