import { data } from '../../data/data';
import Header from '../../Components/Header';
import Skills from '../../Components/Skills';
import { ISkills } from '../../Components/ISkills';

export default function Home() {
    const itemsskills: ISkills[] = [{ items: data.skills.items }];
    
    return (
        <main className="flex h-screen flex-col bg-slate-950 items-center justify-center p-12">
            <div className="w-full max-w-6xl items-center justify-between rounded-2xl font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Header
                    image={data.personal.image}
                    name={data.personal.name}
                    title={data.personal.title}
                    contacts={data.personal.contacts}
                    description={data.personal.description}
                />
            </div> 
            <div className=' items-center justify-center p-12'>
                <Skills itemsskills={itemsskills} />
            </div>
            <footer className=' items-center justify-center'>
                <span className='text-sm'>Coded in <a className='text-teal-500 font-semibold' href="https://code.visualstudio.com/">Visual Studio Code</a>, built with <a className='text-teal-600 font-semibold' href="https://nextjs.org/">Next.js</a> and <a className='text-teal-600 font-semibold' href='https://tailwindcss.com/'>Tailwind CSS</a>.</span>
            </footer>
        </main>
    )
}
