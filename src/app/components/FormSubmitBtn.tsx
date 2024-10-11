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
      className="border-2 rounded p-3 rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl"
    >
      {pending ? loading : label}
    </button>
  );
};

export { FormSubmitBtn };