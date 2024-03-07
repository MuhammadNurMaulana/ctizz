"use server"

export const GetApi = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
  })

  return res.json()
}
