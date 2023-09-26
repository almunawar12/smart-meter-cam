export default function Card(props) {
    return (
      <div className="w-96 mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={props.gambar}
          alt="Gambar"
          className="w-full h-48 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold">{props.judul}</h2>
          <p className="text-gray-600 mt-2">
            {props.deskripsi}
          </p>
        </div>
      </div>
    );
  }
  