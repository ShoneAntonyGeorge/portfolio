import { pageDatas } from "../../data/pageDatas";

export default function FloatingMenu({ page, updatePage }) {

  const stackPageIndex = pageDatas.findIndex(page => page[0] === 'STACKS');

  return (
    <div className="fixed bottom-15 z-10 hidden w-screen justify-center md:flex">
      <div className={`absolute top-0 flex h-8 w-2/5 justify-between rounded-2xl ${page !== stackPageIndex ? 'bg-black/80' : 'bg-black/35'} px-7 shadow-xl`}>
        {pageDatas.map((PageData, index) => {
          const label = PageData[0];
          return (
            <button
              className={
                (page === index ? "border-[#f9bc57]" : "border-transparent") +
                " w-[100px] border-b-5 text-xs text-white lg:text-base"
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
