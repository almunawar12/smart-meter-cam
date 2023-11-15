import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHistory } from '@fortawesome/free-solid-svg-icons';

export const Tabel = () => {
    return (
        <div className="w-full max-w-screen-md mx-auto font-poppins">
            <table className="min-w-full border border-gray-300 table-auto text-white">
                <thead className='bg-blue-400'>
                    <tr>
                        <th className="border-b border-gray-300 py-2">No</th>
                        <th className="border-b border-gray-300 py-2">Email</th>
                        <th className="border-b border-gray-300 py-2">Nama Device</th>
                        <th className="border-b border-gray-300 py-2">No Device</th>
                        <th className="border-b border-gray-300 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-gray-200 text-center text-black'>
                        <td className="border-b border-gray-300 py-2">1</td>
                        <td className="border-b border-gray-300 py-2 truncate">2006068@itg.ac.id</td>
                        <td className="border-b border-gray-300 py-2 truncate">Realme</td>
                        <td className="border-b border-gray-300 py-2 truncate">12345</td>
                        <td className="border-b border-gray-300 py-2">
                            <button className="mr-2">
                                <FontAwesomeIcon icon={faEdit} style={{ color: 'blue' }} />
                            </button>
                            <button className='mr-2'>
                                <FontAwesomeIcon icon={faHistory} style={{ color: 'orange' }} />
                            </button>
                            <button className='mr-2'>
                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
