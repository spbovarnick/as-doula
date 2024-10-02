import { useRef, useEffect } from "react";
import { FormState } from "@/app/lib/formUtils";

const useFormReset = (formState: FormState, onReset: () => void) => {
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return;
    if ( formState.status === 'SUCCESS' && formState.timestamp !== prevTimestamp.current ) {
      formRef.current.reset();
      onReset();
      prevTimestamp.current = formState.timestamp;
    }
  }, [formState.status, formState.timestamp, onReset]);

  return formRef;
};

export { useFormReset };