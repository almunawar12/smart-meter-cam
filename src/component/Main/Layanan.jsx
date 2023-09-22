import Card from "../Card";
import Gambar from "../../../src/assets/img/kamera.png"

export default function Layanan(props) {
  return (
    <div className="flex space-x-4 px-16">
      <Card
        judul="Ini judul"
        deskripsi="ini adalah deskripsi"
        gambar={Gambar}
      />
      <Card
        judul="Ini judul"
        deskripsi="ini adalah deskripsi"
        gambar={Gambar}
      />
      <Card
        judul="Ini judul"
        deskripsi="ini adalah deskripsi"
        gambar={Gambar}
      />
      <Card
        judul="Ini judul"
        deskripsi="ini adalah deskripsi"
        gambar={Gambar}
      />
    </div>
  );
}
