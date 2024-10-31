import Image from "next/image";
import Form_ from "../components/Form";

const RegistrationPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-custom-gradient">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="mb-2git"
      />
      <Form_ />
    </div>
  );
};

export default RegistrationPage;
