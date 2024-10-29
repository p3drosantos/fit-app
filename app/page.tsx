import Image from "next/image";
import Form_ from "./components/Form";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-custom-gradient">
      <Image src="/logo.png" alt="logo" width={150} height={150} />
      <Form_ />
    </div>
  );
}
