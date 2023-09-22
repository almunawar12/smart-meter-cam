export default function Card(props) {
    return (
      <div class="w-96 mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={props.gambar}
          alt="Gambar"
          class="w-full h-48 object-cover"
        />
        <div class="px-6 py-4">
          <h2 class="text-xl font-semibold">{props.judul}</h2>
          <p class="text-gray-600 mt-2">
            {props.deskripsi}
          </p>
        </div>
      </div>
    );
  }
  