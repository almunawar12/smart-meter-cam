interface FormItemProps {
    label: string;
    type: 'text' | 'email' | 'password';
    placeholder: string;
}
export default function FormItem(props: FormItemProps) {
    const {label, type, placeholder} = props
    return (
        <div className="mb-2">
            <label htmlFor={label} className="text-gray-500 font-semibold">{label}</label>
            <input type={type} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500" placeholder={placeholder} />
        </div>
    )
}
