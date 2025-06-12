import { pageDatas } from "../../data/pageDatas";

export default function FloatingMenu({ page, updatePage }) {
  return (
    <div className="fixed bottom-10 z-10 hidden w-screen justify-center md:flex">
      <div className="absolute top-0 flex h-8 w-2/5 justify-between rounded-2xl bg-black/40 px-7 shadow-xl">
        {pageDatas.map((PageData, index) => {
          const label = PageData[0];
          return (
            <button
              className={
                (page === index ? "underline" : "") +
                " w-[100px] text-xs text-white italic lg:text-base"
              }
              key={index}
              onClick={() => updatePage(index)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
