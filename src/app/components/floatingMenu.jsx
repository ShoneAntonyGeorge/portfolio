import { pageDatas } from "./pageDatas"

export default function FloatingMenu({page, setPage, setScrolling}){
    return(
        <div className="w-screen absolute bottom-30 md:flex justify-center hidden ">
            <div className="w-2/5 h-15 bg-white rounded-b-2xl absolute top-0 shadow-xl flex justify-between px-7">
                {pageDatas.map((PageData,index) => {
                    const label = PageData[0];
                    return (
                        <button 
                            className={page === index ? 'text-red-600' : 'text-gray-600'} 
                            key={index}
                            onClick={() => {setPage(index);setScrolling(true)}}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}