import Editor from "@/ui/editor";
import Github from "@/ui/icons/github";
import Menu from "./menu";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
      <span class="lg:text-[6px] md:text-[5px] sm:text-[4px] sm:pl-[5px] sm:pt-[33px] sm:w-[110px] absolute md:w-[80px] md:pt-[35px] lg:w-[100px] lg:pt-[40px] font-semibold">Upgrade. Upskill. Upsell.</span>
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
