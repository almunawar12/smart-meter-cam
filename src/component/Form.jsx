export default function Form(props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-600 font-semibold">{props.label}</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
        placeholder={props.placeholder}
      />
    </div>
  );
}
