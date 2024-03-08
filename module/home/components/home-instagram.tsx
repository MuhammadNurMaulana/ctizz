import Image from "next/image"
import { CiInstagram } from "react-icons/ci"

export default function InstagramStories() {
  return (
    <div className="my-16">
      <h1 className="mb-4 text-xl md:text-4xl font-mono font-semibold px-8 md:px-0 text-center">Instagram Stories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        {images.map((item, idx) => (
          <a href="https://www.instagram.com/ctizz4/?igsh=amw2ZHA1YmtzNWtm" target="_blank" key={idx} className="relative group overflow-hidden rounded-[10px]">
            <Image src={item.image} alt={`image model ${idx}`} width={600} height={600} className="h-[400px] object-cover  object-center w-full" />
            <div className="opacity-0 absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 flex items-center justify-center group-hover:opacity-100 bg-neutral-700/50 text-white">
              <CiInstagram size={45} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

const images = [
  {
    image: "https://img.freepik.com/free-photo/chinese-girl-bare-shoulder-top-sitting-posing-studio_1098-17155.jpg?t=st=1709825545~exp=1709829145~hmac=a952ff3d15829162fae2368e0c4a6324655730d1971003ef4f266f0227c77510&w=360",
  },
  {
    image:
      "https://img.freepik.com/free-photo/people-positive-human-facial-expressions-emotions-student-girl-relaxing-indoors-after-college_1150-16981.jpg?t=st=1709825594~exp=1709829194~hmac=912cf2e7420627fb721b139d19cfaf260e7f4c89c568b9cd4b24f51ad51d49b7&w=360",
  },
  {
    image: "https://img.freepik.com/free-photo/fashion-girl-dress-up-with-hand-gestures-pink-background_1150-9700.jpg?t=st=1709825874~exp=1709829474~hmac=8ea5e6210eb9215f5ee4c8fc07e8aee1db7c129e52e44ebcc1f65b62c7099db6&w=360",
  },
  {
    image: "https://img.freepik.com/free-photo/fashion-girl-dress-up-with-hand-gesture_1150-14715.jpg?t=st=1709825909~exp=1709829509~hmac=05834781e3e6db9b3608b847cc0a9da3ee93615dcfe28db58d0b59eb0cd7abe5&w=360",
  },
]
