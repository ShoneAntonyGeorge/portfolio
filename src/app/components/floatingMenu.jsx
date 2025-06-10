import { pageDatas } from "./pageDatas"

export default function FloatingMenu({page, setPage, pageRef}){
    return(
        <div className="w-screen fixed bottom-25 md:flex justify-center hidden z-10">
            <div className="w-2/5 h-11 bg-black/40 rounded-b-2xl absolute top-0 shadow-xl flex justify-between px-7">
                {pageDatas.map((PageData,index) => {
                    const label = PageData[0];
                    return (
                        <button 
                            className={page === index ? 'text-[#f9bc57]' : 'text-white'} 
                            key={index}
                            onClick={() => {setPage(index);pageRef.current = index}}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}