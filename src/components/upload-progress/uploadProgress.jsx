import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UploadItem from "../upload-item/uploadItem";
import { uploadFile } from "../../redux/upload/upload.action";

const UploadProgress = (props) => {
  const fileProgress = useSelector((state) => state.uploadReducer.fileProgress);
  const dispatch = useDispatch();

  const uploadedFileAmt = Object.values(fileProgress).length;

  useEffect(() => {
    const fileToUpload = Object.values(fileProgress).filter(
      (file) => file.progress === 0
    );

    dispatch(uploadFile(fileToUpload));
  }, [uploadedFileAmt]);

  return uploadedFileAmt > 0 ? (
    <div className={"wrapper"}>
      {Object.values(fileProgress)
        ? Object.values(fileProgress).map((file) => (
            <UploadItem key={file.id} file={file} />
          ))
        : null}
    </div>
  ) : null;
};

export default UploadProgress;
