import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TResolver = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type IFormChildren = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TResolver;

const HCForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: IFormChildren) => {
  const formConfig: TResolver = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default HCForm;
