import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  age: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const QuetoForm = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="age"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
    </form>
  );
};

export default QuetoForm;
