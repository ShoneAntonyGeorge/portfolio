import { pageDatas } from "./pageDatas"

export default function FloatingMenu({page, updatePage}){
    return(
        <div className="w-screen fixed bottom-20 md:flex justify-center hidden z-10">
            <div className="w-2/5 h-8 bg-black/40 rounded-2xl absolute top-0 shadow-xl flex justify-between px-7">
                {pageDatas.map((PageData,index) => {
                    const label = PageData[0];
                    return (
                        <button 
                            className={(page === index ? 'underline' : '') + ' text-xs lg:text-base w-[100px] italic text-white'} 
                            key={index}
                            onClick={() => updatePage(index)}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}