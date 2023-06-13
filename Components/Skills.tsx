
import { ISkills } from "./ISkills";

export default function Skills(props: { itemsskills: ISkills[] }) {
    return (
        <div className="">
            {Array.from(props.itemsskills).map(function(item, index) { 
                return <code key={index} className="text-teal-200 font-bold border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-3xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
                        {item.items}
                    </code>
            })}
        </div>
    )
}