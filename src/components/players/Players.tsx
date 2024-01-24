import { Switch } from "@/components/ui/switch"


export default function Players() {
    return (
        <div className="flex justify-evenly my-7 space-x-1 ">
            <p className=" text-sky-100 font-medium">Hráč 1 ⬅</p>
            <Switch className=""/>  
            <p className=" text-sky-100 font-medium">⮕ Hráč 2</p>
        </div>
    )
}