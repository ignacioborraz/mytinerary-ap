export default function CardPolaroid({ src,alt,text }) {
    return (
        <div className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
            <img src={src} alt={alt} />
            <p className="text-[20px]">{text}</p>
        </div>
    )
}