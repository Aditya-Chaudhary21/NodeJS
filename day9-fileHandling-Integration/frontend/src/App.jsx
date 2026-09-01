import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    for (let i = 0; i < data.image.length; i++) {
      formData.append("images", data.image[i]);
    }

    console.log(data);
    await axios.post("http://localhost:3000/api/create", formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Upload Your File
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Enter your details and select a file to upload.
        </p>

        {/* Name Field */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* File Field */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Select File
          </label>

          <input
            {...register("image")}
            type="file"
            multiple
            className="w-full cursor-pointer rounded-lg border border-gray-300 p-2 text-sm text-gray-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
