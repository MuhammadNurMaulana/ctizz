import Image from "next/image"

interface PropsAuthComponents {
  children: React.ReactNode
  image: string
  alt: string
}

export default function AuthComponents({ children, alt, image }: PropsAuthComponents) {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="relative">
        <Image src={image} alt={alt} width={800} height={600} className="lg:h-screen object-contain bg-neutral-200" />
        <h1 className="absolute top-4 left-4 text-3xl font-bold font-serif">Ctizz</h1>
      </div>
      {children}
    </div>
  )
}
