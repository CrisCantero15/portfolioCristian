import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsComponent({ experiences, studies }) {
  
    const tabClass = "text-1xl sm:text-2xl font-bold cursor-pointer px-4 py-6 rounded-md transition-all duration-300 hover:border-amber-300 data-[state=active]:bg-amber-300 data-[state=active]:text-black";

    return (
        <Tabs defaultValue="experience" className="w-full flex flex-col text-center gap-6">
        <TabsList className="flex justify-center items-center gap-3 mx-auto">
            <TabsTrigger value="experience" className={tabClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            Experiencia
            </TabsTrigger>
            <TabsTrigger value="formation" className={tabClass}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            Formación
            </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="mt-6">
            {experiences.map(experience => {
                const { title, company, location, date, description, technologies, link } = experience.data;
                return (
                    <div className="flex flex-col gap-4 pt-6 text-left border-l-2 border-l-gray-600 pl-10 relative md:flex-row md:gap-4">
                        <div className="flex flex-col gap-2 flex-none md:w-50 lg:w-64">
                            <div className="p-2 bg-amber-300 rounded-full w-0.5 absolute -left-2.25 top-12"></div>
                            <h2 className="text-2xl font-bold text-amber-300">{title}</h2>
                            <a href={link ? link : "#"} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-bold hover:underline">{company}</a>
                            <p className="text-sm font-semibold text-gray-200">{location}</p>
                            <p className="text-sm font-semibold text-gray-200">{date.start} - {date.end ? date.end : "Actualmente"}</p>
                            <div className="flex items-center mt-2">
                                {technologies.map(tech => (
								<span 
									class="flex items-center justify-center text-gray-600 text-xs px-2 py-1 border border-gray-600 rounded-full mr-2 mb-2"
									style={{ backgroundColor: tech.color || '#1F2937' }}
								>
								<img src={tech.icon} alt={tech.name} class="inline-block w-4 h-4 mr-1" />
								<span class="inline-block"><strong>{tech.name}</strong></span>
								</span>
							))}
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold text-gray-200 text-sm md:text-lg">{description}</p>
                        </div>
                    </div>                    
                );
            })}
        </TabsContent>
        <TabsContent value="formation" className="mt-6">
            {studies.map(study => {
                const { title, school, location, date, description, link} = study.data;
                return (
                    <div className="flex flex-col gap-4 pt-6 text-left border-l-2 border-l-gray-600 pl-10 relative md:flex-row md:gap-10">
                        <div className="flex flex-col gap-2 flex-none md:w-50 lg:w-64">
                            <div className="p-2 bg-amber-300 rounded-full w-0.5 absolute -left-2.25 top-12"></div>
                            <h2 className="text-2xl font-bold text-amber-300">{title}</h2>
                            <a href={link ? link : "#"} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-bold hover:underline">{school}</a>
                            <p className="text-sm font-semibold text-gray-200">{location}</p>
                            <p className="text-sm font-semibold text-gray-200">{date.start} - {date.end ? date.end : "Actualmente"}</p>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold text-gray-200 text-sm md:text-lg">{description}</p>
                        </div>
                    </div>                    
                );
            })}
        </TabsContent>
        </Tabs>
    );
}

