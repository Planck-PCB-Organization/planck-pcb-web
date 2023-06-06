import React from "react";
import Upload from "../../svgs/Upload";
import styles from "./FileUpload.module.scss";

interface FileUploadProps {
  id: string;
}

const FileUpload = (props: FileUploadProps) => {
  const { id } = props;

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
  };

  return (
    <label htmlFor={id} className={styles["file-upload"]}>
      <input
        id={id}
        type="file"
        accept=".gbr,.gbl,.gtl,.gbs,.gts,.gto,.gbo,.gm1,.gm2,.g3l,.g3r,.g2l,.g2r,.gko"
        onChange={handleUpload}
      />
      <Upload width={24} height={24} />
      Add Gerber File
    </label>
  );
};

export default FileUpload;
