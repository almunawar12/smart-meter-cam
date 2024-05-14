import Image from 'next/image';

interface LayananProps {
    title: string;
    content: string;
    thumbnail: '/assets/images/analytics.png';
}

export default function Layanan(props: LayananProps) {
    const { title, content, thumbnail } = props;
    return (
        <div className="bg-white shadow-md rounded-lg p-4 lg:w-2/4 w-full mb-4">
            <Image src={thumbnail} width={200} height={200} alt='Layanan' />
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className='text-gray-500 text-justify'>{content}</p>
        </div>
    )
}
