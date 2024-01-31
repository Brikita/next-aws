"use client";
import { UploadForm } from "./(form)/form";
const Page = () => {
  return (
    <>
      <h1>Upload files to S3 bucket</h1>
      <UploadForm />
    </>
  );
};

export default Page;
