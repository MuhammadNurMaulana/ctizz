"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Pagination({ pages }: { pages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  return (
    <div>
      <div>
        <button
          disabled={parseInt(searchParams.get("page") ?? "1") == 1}
          onClick={() => {
            const params = new URLSearchParams(searchParams)

            params.set("page", (parseInt(searchParams.get("page") ?? "2") - 1).toString())

            replace(`${pathname}?${params.toString()}`)
          }}
        >
          Prev
        </button>
        <button>Page {parseInt(searchParams.get("page") ?? "1")}</button>
        <button
          disabled={parseInt(searchParams.get("page") ?? "1") >= (pages ?? 1)}
          onClick={() => {
            const params = new URLSearchParams(searchParams)
            params.set("page", (parseInt(searchParams.get("page") ?? "1") + 1).toString())
            replace(`${pathname}?${params.toString()}`)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
