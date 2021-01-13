import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUploadedIitem } from "../../redux/upload/upload.action";

import { ReactComponent as Trash } from "../../assests/trash-solid.svg";
import Image from "../image/image";

const generateBase64FromImage = (imageFile) => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (err) => reject(err);
  });

  reader.readAsDataURL(imageFile);
  return promise;
};

const UploadItem = (props) => {
  const { file } = props;
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    handleChange(file.file);
  }, []);

  const handleChange = (file) => {
    if (file) {
      generateBase64FromImage(file)
        .then((b64) => {
          setImagePreview(b64);
        })
        .catch((e) => {
          setImagePreview(null);
        });
    }
  };

  const cancelUpload = () => {
    file.cancelSource.cancel("cancelled by user");
  };

  return (
    <div className="flex justify-between p-3.5 items-center md:p-5">
      <Image imageUrl={imagePreview} />

      {file.progress < 100 ? (
        <div className="flex-grow align-self ml-4 text-center">
          <div className="h-1.5 bg-gray-50 rounded-md">
            <div
              className="h-1.5 bg-green-300 rounded-md"
              style={{ width: `${file.progress}%` }}
            />
          </div>
          <label
            className="text-base text-gray-600 inline-block mt-4 text-center"
            htmlFor=""
          >
            {file.file.name}
          </label>
        </div>
      ) : (
        <label
          className="md:text-xl text-base text-gray-600 inline-block"
          htmlFor=""
        >
          {file.file.name}
        </label>
      )}
      {file.progress < 100 ? (
        <span
          onClick={() => {
            cancelUpload();
            dispatch(removeUploadedIitem(file));
          }}
          className="inline-block text-base text-gray-800 hover:text-red-500 cursor-pointer self-start p-2"
        >
          x
        </span>
      ) : (
        <Trash
          onClick={() => {
            dispatch(removeUploadedIitem(file));
          }}
          className="h-4 w-4 cursor-pointer  fill-current text-gray-400 hover:text-red-500"
        />
      )}
    </div>
  );
};

export default UploadItem;
