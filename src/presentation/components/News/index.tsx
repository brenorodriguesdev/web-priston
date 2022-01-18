const posts = [
    {
        title: 'Bônus em donates',
        href: '#',
        category: { name: '+ Promoções', href: '#' },
        date: 'Jan 17, 2022',
        datetime: '2022-01-17',
        imageUrl:
            './pike-sebastian-cavazzoli.jpg',
    },
    {
        title: 'Eventos de lançamento',
        href: '#',
        category: { name: '+ Eventos', href: '#' },
        date: 'Jan 17, 2022',
        datetime: '2022-01-17',
        imageUrl:
            './knight-sebastian-cavazzoli.jpg',
    },
    {
        title: 'Experiência nostalgica ao jogador',
        href: '#',
        category: { name: '+ Atualizações', href: '#' },
        date: 'Jan 17, 2022',
        datetime: '2022-01-17',
        imageUrl:
            './ata-sebastian-cavazzoli.jpg',
    },
]

function News() {
    return (
        <div className="relative bg-gray-50 pt-6 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-8 lg:px-8" >
            <div className="absolute inset-0">
                <div className="bg-white h-1/7 sm:h-2/8" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">Novidades</h2>
                </div>
                <div className="mt-5 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-[#a99260]">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="ml-3">
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { News }