import { Controller, useForm } from "react-hook-form";
import Card from "../../../components/Card";
import Section from "../../../components/Section";
import Chip from "../../../components/svgs/Chip";
import styles from "./Order.module.scss";
import {
  COPPER_THICKNESS,
  DIFFERENT_DESIGN,
  PCB_FR4_TG,
  PCB_LAYERS,
  PCB_MATERIALS,
  PCB_MINIMUM_HOLE_SIZE,
  PCB_MINIMUM_TRACE_WIDTH,
  PCB_TICKNESS,
  PCB_TYPE,
  SERIGRAPHY,
  SOLDER_MASKS,
  SURFACES,
  VIA_TRANSACTIONS,
} from "./contants";
import Button from "../../../components/Button";
import InputGroup from "../../../components/FormInputs/InputGroup";
import TextField from "../../../components/FormInputs/TextField";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import api from "../../api";

interface OrderForm {
  pcb_type: {
    label: string;
    value: string;
  };
  height: number;
  width: number;
  different_design: {
    label: string;
    value: string | number;
  };
  unit: string;
  amount: number;
  layers: {
    label: string;
    value: number;
  };
  material: {
    label: string;
    value: string;
  };
  fr4_tg: {
    label: string;
    value: string;
  };
  tickness: {
    label: string;
    value: string | number;
  };
  minimum_trace_width: {
    label: string;
    value: string | number;
  };
  minimum_hole_size: {
    label: string;
    value: string | number;
  };
  soldermask: {
    label: string;
    value: string;
  };
  serigraphy: {
    label: string;
    value: string;
  };
  surface: {
    label: string;
    value: string;
  };
  via_transaction: {
    label: string;
    value: string;
  };
  copper_thickness: {
    label: string;
    value: string;
  };
}

// const schema = yup
//   .object()
//   .shape({
//     pcb_type: yup.object().required("Lütfen bir tahta tipi seçiniz"),
//     height: yup.number().required("Lütfen bir yükseklik giriniz"),
//     width: yup.number().required("Lütfen bir genişlik giriniz"),
//     different_design: yup.object().required("Lütfen bir tasarım seçiniz"),
//     unit: yup.string().required("Lütfen bir birim seçiniz"),
//     amount: yup.number().required("Lütfen bir miktar giriniz"),
//     layers: yup.object().required("Lütfen katman sayısı seçiniz"),
//     material: yup.object().required("Lütfen bir malzeme seçiniz"),
//     fr4_tg: yup.object().required("Lütfen bir TG seçiniz"),
//     tickness: yup.object().required("Lütfen bir kalınlık seçiniz"),
//     minimum_trace_width: yup
//       .object()
//       .required("Lütfen bir minimum iz genişliği seçiniz"),
//     minimum_hole_size: yup
//       .object()
//       .required("Lütfen bir minimum delik çapı seçiniz"),
//     soldermask: yup.object().required("Lütfen bir lehim maskesi seçiniz"),
//     serigraphy: yup.object().required("Lütfen bir serigrafi seçiniz"),
//     surface: yup.object().required("Lütfen bir yüzey işlemi seçiniz"),
//     via_transaction: yup.object().required("Lütfen bir via işlemi seçiniz"),
//     copper_thickness: yup
//       .object()
//       .required("Lütfen bir bakır kalınlığı seçiniz"),
//   })
//   .required();

const Order = () => {
  const { handleSubmit, control } = useForm<OrderForm>({
    defaultValues: {
      pcb_type: PCB_TYPE[0],
      height: 0,
      width: 0,
      different_design: DIFFERENT_DESIGN[0],
      unit: "mm",
      amount: 0,
      layers: PCB_LAYERS[0],
      material: PCB_MATERIALS[0],
      fr4_tg: PCB_FR4_TG[0],
      tickness: PCB_TICKNESS[0],
      minimum_trace_width: PCB_MINIMUM_TRACE_WIDTH[0],
      minimum_hole_size: PCB_MINIMUM_HOLE_SIZE[0],
      soldermask: SOLDER_MASKS[0],
      serigraphy: SERIGRAPHY[0],
      surface: SURFACES[0],
      via_transaction: VIA_TRANSACTIONS[0],
      copper_thickness: COPPER_THICKNESS[0],
    },
    // resolver: yupResolver(null),
  });

  // const { control } = useForm();

  const handleChange = async (newHeight: string | number) => {
    // Use Axios to send PUT request with updated height to backend
    try {
      console.log(newHeight)
      await api.addBook(12);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Section className={styles.orderForm} id="section-4">
      <Card className={styles["component-container"]}>
        <div className={styles["order-form-container"]}>
          <span className={styles["order-form-header"]}>
            <Chip width={30} height={30} /> PCB Spesifikasyon Seçimi
          </span>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className={styles["form-wrapper"]}
          >
            <span className={styles["form-input-wrapper"]}>
              <label>Tahta Tipi: &nbsp;</label>
              <Controller
                name="pcb_type"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_TYPE.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Panoda Farklı Tasarım: &nbsp;</label>

              <Controller
                name="different_design"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {DIFFERENT_DESIGN.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Boyut (Tek): &nbsp;</label>

              <div className={styles["selectable-buttons-wrapper"]}>
                <InputGroup
                  style={{
                    width: "200px",
                  }}
                >
                  <Controller
                    name="height"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        id="height"
                        label="Height"
                        value={value}
                        // onChange={onChange}
                        onChange={(event) => {
                          onChange(onChange);
                          handleChange(event);
                        }}
                        type="number"
                        error={error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="width"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        id="width"
                        label="Width"
                        value={value}
                        onChange={onChange}
                        type="number"
                        error={error?.message}
                      />
                    )}
                  />
                </InputGroup>
                <Controller
                  name="unit"
                  render={({ field: { onChange, value } }) => (
                    <Button
                      type="button"
                      variant="outlined"
                      onClick={() => onChange(value === "mm" ? "inch" : "mm")}
                    >
                      {value}
                    </Button>
                  )}
                  control={control}
                />
              </div>
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Miktar: &nbsp;</label>

              <Controller
                name="amount"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    id="amount"
                    label="Adet"
                    value={value}
                    onChange={onChange}
                    type="number"
                    error={error?.message}
                  />
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> PCB Katman Sayısı: &nbsp;</label>

              <Controller
                name="layers"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_LAYERS.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Materyal: &nbsp;</label>

              <Controller
                name="material"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_MATERIALS.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> FR4 - TG: &nbsp;</label>

              <Controller
                name="fr4_tg"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_FR4_TG.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Kalınlık: &nbsp;</label>

              <Controller
                name="tickness"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_TICKNESS.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Minimum İz/Boşluk: &nbsp;</label>

              <Controller
                name="minimum_trace_width"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_MINIMUM_TRACE_WIDTH.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Minimum Delik Boyutu: &nbsp;</label>

              <Controller
                name="minimum_hole_size"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {PCB_MINIMUM_HOLE_SIZE.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Lehim Maskesi: &nbsp;</label>

              <Controller
                name="soldermask"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {SOLDER_MASKS.map((type) => (
                      <Button
                        style={{
                          backgroundColor: type.value,
                          color: type.value === "White" ? "black" : "white",
                        }}
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Serigrafi: &nbsp;</label>

              <Controller
                name="serigraphy"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {SERIGRAPHY.map((type) => (
                      <Button
                        style={{
                          backgroundColor: type.value,
                          color: type.value === "White" ? "black" : "white",
                        }}
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Yüzey: &nbsp;</label>

              <Controller
                name="surface"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {SURFACES.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> İşlem Yoluyla: &nbsp;</label>

              <Controller
                name="via_transaction"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {VIA_TRANSACTIONS.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
            <span className={styles["form-input-wrapper"]}>
              <label> Bakır Kalınlığı: &nbsp;</label>

              <Controller
                name="copper_thickness"
                render={({ field: { onChange, value } }) => (
                  <div className={styles["selectable-buttons-wrapper"]}>
                    {COPPER_THICKNESS.map((type) => (
                      <Button
                        key={type.value}
                        type="button"
                        variant="outlined"
                        selected={value?.value === type.value}
                        onClick={() => {
                          onChange(type);
                        }}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                )}
                control={control}
              />
            </span>
          </form>
        </div>
        <Card className={styles["right-sidebar"]}>
          <div className={styles["input-area"]}>
            {/*<Controller*/}
            {/*    name="file"*/}
            {/*    control={control}*/}
            {/*    render={({ field }) => (*/}
            {/*        <FileUpload*/}
            {/*            id="file-upload"*/}
            {/*            name="file"*/}
            {/*            label="Add Gerber File"*/}
            {/*            onChange={field.onChange}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*/>*/}
            <br></br>
            <br></br>
            <label>Fiyat</label>
            <br></br>
            <br></br>
            <label>Ücretsiz kargo</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/*<input type="text" />*/}
            <label>Mail</label>

            <input
                id="amount"
            />
            <br></br>
            <label>Telefon</label>

            <input
                id="amount"
            />
            <br></br>
            <label>Adres</label>

            <input
                id="amount"
            />

          </div>
          <button onClick={api.getBooks} className={styles["new-button"]}>Sipariş ver</button>
        </Card>
      </Card>
    </Section>
  );
};

export default Order;
