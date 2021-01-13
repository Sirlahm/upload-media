import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadProgress from "../upload-progress/uploadProgress";
import { setUploadFile } from "../../redux/upload/upload.action";

const Input = (props) => {
  const [imagePreview, setImagePreview] = useState(false);
  const fileProgress = useSelector((state) => state.uploadReducer.fileProgress);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImagePreview(true);
    dispatch(setUploadFile(e.target.files));
  };

  return (
    <div>
      {imagePreview && <UploadProgress />}
      <div className="w-full flex my-7">
        <label
          htmlFor="file"
          className="text-center w-3/9 cursor-pointer p-3 border border-gray-500 outline-none rounded inline-block w-3/4 mx-auto text-blue-500"
        >
          {Object.values(fileProgress).length ? "+Add More" : "+Add Media"}
        </label>
        <input
          multiple
          onChange={handleChange}
          className="hidden"
          type="file"
          id={"file"}
        />
      </div>
    </div>
  );
};

export default Input;
