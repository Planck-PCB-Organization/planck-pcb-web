import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../components/FormInputs/TextField";
import FileUpload from "../../components/FormInputs/FileUpload";
import Button from "../../components/Button";
import { useState } from "react";

type Inputs = {
  name: string;
  file: File | null;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    file: yup.mixed().required(),
  })
  .required();

const QuetoForm = () => {
  const { handleSubmit, control } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers = [1, 2, 4, 6];

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            id="name"
            label="Name"
            value={field.value}
            onChange={field.onChange}
            type="number"
          />
        )}
      />
      <Controller
        name="file"
        control={control}
        render={() => <FileUpload id="file-upload" />}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {layers.map((layer) => (
          <Button
            key={layer}
            color="secondary"
            style={{
              border: selectedLayer === layer ? "1px solid red" : "none",
            }}
            onClick={() => {
              console.log(layer);
              setSelectedLayer(layer);
            }}
          >
            Submit
          </Button>
        ))}
      </div>
    </form>
  );
};

export default QuetoForm;
