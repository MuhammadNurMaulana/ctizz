export default function DetailsDeskripsi({ stok }: { stok: number }) {
  const dataLokasi = ["Jakarta", "Medan", "Bandung", "Sulawesi", "Sumatera"]
  const lokasi = Math.floor(Math.random() * dataLokasi.length)
  const lokasiRandom = dataLokasi[lokasi]
  return (
    <div>
      <h1 className="my-4 text-xl font-semibold">Spesifikasi</h1>
      <div>
        <h1>Stok : {stok}</h1>
        <h1>Dikirim dari : {lokasiRandom}</h1>
      </div>
      <h1 className="my-4 text-xl font-semibold">Deskripsi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas ipsam reiciendis modi consequuntur iusto recusandae animi blanditiis nobis, ipsa omnis dolore ducimus doloribus voluptatum culpa dignissimos facere placeat cumque ea
        tempora dolores rem officia nam. Dicta iusto exercitationem corrupti. Natus totam fugit enim non. Laboriosam saepe possimus ut similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores eum assumenda
        tempora, vero officiis dolore aspernatur mollitia porro illo ut sed earum itaque modi quisquam commodi, incidunt inventore at.
      </p>
    </div>
  )
}
