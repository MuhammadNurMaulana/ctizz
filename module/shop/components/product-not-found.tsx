export default function ProductNotFound({ product }: { product: boolean }) {
  return <>{!product && <div className="w-full h-screen flex items-center justify-center text-3xl -z-20"> Product Details Not Found</div>}</>
}
