import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono">Hello world!</h1>
      <Image
        src={"/han.png"}
        alt={"picture of hanny"}
        width={500}
        height={500}
      ></Image>

    </main>
  );
}
