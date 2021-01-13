import React from "react";
import Input from "../input/input";
import Button from "../button/button";

const Box = () => {
  return (
    <div className="w-1/7 bg-white mx-auto self-start pb-12 mt-10">
      <div className="border-b border-gray-200">
        <p className="text-base text-gray-600 text-center py-2">Upload Media</p>
      </div>

      <p className="text-center text-sm text-gray-600 p-2 ">
        Add up to 6 high quality images, GIFs and videos to make this product
        more appealing to customers.
      </p>
      <Input />

      <div className="flex justify-between px-4 mt-10">
        <Button className="bg-gray-300  hover:bg-gray-400">Cancel</Button>
        <Button className="bg-green-300 hover:bg-green-400">Save</Button>
      </div>
    </div>
  );
};

export default Box;
