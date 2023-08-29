import React from "react";
import Upload from "../../svgs/Upload";
import styles from "./FileUpload.module.scss";

interface FileUploadProps {
  id: string;
  name: string;
  label: string;
  onChange?: (file: File) => void;
}

const FileUpload = (props: FileUploadProps) => {
  const { id, name, label } = props;

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      props.onChange?.(file);
    }
  };

  return (
    <label htmlFor={id} className={styles["file-upload"]}>
      <input
        id={id}
        name={name}
        type="file"
        accept=".gbr,.gbl,.gtl,.gbs,.gts,.gto,.gbo,.gm1,.gm2,.g3l,.g3r,.g2l,.g2r,.gko"
        onChange={handleUpload}
      />
      <Upload width={24} height={24} />
      {label ?? "Add Gerber File"}
    </label>
  );
};

export default FileUpload;
