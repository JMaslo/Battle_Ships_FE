import { GiBattleship } from "react-icons/gi"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"  

export default function Header() {

    return (
        <div className="flex justify-around">
            <GiBattleship className="text-8xl"/>
            <h1 className="p-6 text-4xl font-extrabold text-center w-4/5">Battle Ships</h1>
            <HoverCard>
                <HoverCardTrigger className="text-sky-100 my-9 px-3 text-2xl hover:cursor-pointer">?</HoverCardTrigger>
                <HoverCardContent className="mr-4 bg-sky-100">Ve hře Battle Ships je za úkol si nejprve rozložit své lodě do hracího pole, 
                tak aby je soupeř nemohl potopit. 
                Jakmile začne hra, tak se snažte nepřítelovy lodě potopit dříve, 
                než on potopí ty Vaše. Užívejte hru!</HoverCardContent>
            </HoverCard>            
        </div>
    )
}