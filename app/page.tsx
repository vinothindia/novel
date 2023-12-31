import Editor from "@/ui/editor";
import Github from "@/ui/icons/github";
import Menu from "./menu";
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <Image
      src="/digrilogonew.png"
      width={50}
      height={50}
      alt="Picture of the author"
     />
      <h1>Upgrade. Upskill. Upsell.</h1>
      <a
        href="/github"
        target="_blank"
        className="absolute bottom-5 left-5 z-10 max-h-fit rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        <Github />
      </a>
      <Menu />
      <Editor />
    </div>
  );
}
