import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../../components/FormInputs/TextField";
import FileUpload from "../../../components/FormInputs/FileUpload";
import Button from "../../../components/Button";
import { useState } from "react";
import InputGroup from "../../../components/FormInputs/InputGroup";
import styles from "./QuetoForm.module.scss";
import { useNavigate } from "react-router";
import Dropdown from "../../../components/Dropdown";
import Section from "../../../components/Section";
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/Card";

type Inputs = {
  file: File | null;
  height: number;
  width: number;
};

const schema = yup
  .object()
  .shape({
    file: yup.mixed().required("Please upload a file"),
    height: yup.number().required("Please enter a height"),
    width: yup.number().required("Please enter a width"),
  })
  .required();

const QuetoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  const navigate = useNavigate();

  const [selectedLayer, setSelectedLayer] = useState<number>(1);

  const layers = [1, 2];

  return (
    <Section id="section-1">
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={1000}
        swipeable
        useKeyboardArrows
        showThumbs={false}
        swipeScrollTolerance={20}
        dynamicHeight
        axis="horizontal"
        centerMode={false}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <img
              style={{
                objectFit: "fill",
                maxHeight: "740px",
              }}
              alt="carousel"
              src={`src/assets/${index}.jpg`}
            />
          </div>
        ))}
      </Carousel>
      <Card className={styles["card-form"]} shadow="high">
        <form
          onSubmit={handleSubmit((d) => console.log(d))}
          style={{
            height: "100%",
          }}
        >
          <div className={styles["queto-form-container"]}>
            <Controller
              name="file"
              control={control}
              render={({ field }) => (
                <FileUpload
                  id="file-upload"
                  name="file"
                  label="Add Gerber File"
                  onChange={field.onChange}
                />
              )}
            />
              <label>PCB Katman Sayısı: &nbsp;</label>
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
                  color="white"
                  selected={selectedLayer === layer}
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    setSelectedLayer(layer);
                  }}
                >
                  {layer}
                </Button>
              ))}
            </div>

            <InputGroup>
              <Controller
                name="height"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="height"
                    label="Height"
                    value={field.value}
                    onChange={field.onChange}
                    type="number"
                    error={errors.height?.message}
                  />
                )}
              />
              <Controller
                name="width"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="width"
                    label="Width"
                    value={field.value}
                    onChange={field.onChange}
                    type="number"
                    error={errors.width?.message}
                  />
                )}
              />
            </InputGroup>
              <label>Adet: &nbsp;</label>

            <Dropdown
              onSelect={(value) => console.log(value)}
              options={[
                {
                  value: "1",
                  label: "1",
                },
                {
                  value: "2",
                  label: "2",
                },
              ]}
            />

            <Button className={styles["generate-button"]} color="primary" onClick={() => navigate("/queto")}>
              <span>Generate</span>
            </Button>
          </div>
        </form>
      </Card>
        <Card className={styles["card-form-3d"]} shadow="high">
            <form
                onSubmit={handleSubmit((d) => console.log(d))}
                style={{
                    height: "100%",
                }}
            >
                <div className={styles["queto-form-container"]}>
                    <Controller
                        name="file"
                        control={control}
                        render={({ field }) => (
                            <FileUpload
                                id="file-upload"
                                name="file"
                                label="Add Stl File"
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <label>Adet: &nbsp;</label>


                    <Dropdown
                        onSelect={(value) => console.log(value)}
                        options={[
                            {
                                value: "1",
                                label: "1",
                            },
                            {
                                value: "2",
                                label: "2",
                            },
                        ]}
                    />
                    <label>Dolgunluk: &nbsp;</label>

                    <Dropdown
                        onSelect={(value) => console.log(value)}
                        options={[
                            {
                                value: "1",
                                label: "1",
                            },
                            {
                                value: "2",
                                label: "2",
                            },
                        ]}
                    />

                    <Button className={styles["generate-button"]}  color="primary" onClick={() => navigate("/queto")}>
                        <span>Generate</span>
                    </Button>
                </div>
            </form>
        </Card>
    </Section>
  );
};

export default QuetoForm;
