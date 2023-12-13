import { FaPlus, FaPen } from "react-icons/fa";

const AddresseSection = ({ addresses }) => {
    console.log(addresses)
    return (
        <div className="bg-white flex flex-col items-center gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4>Mes adresses</h4>
            {addresses.map(addresse => (
                <div className=" bg-secondary p-2 rounded-xl max-w-xs w-full flex justify-between">
                    <div key={addresse.id} className="flex flex-col justify-start">
                        <span className="font-semibold">{addresse.streetNumber} {addresse.streetName}</span>
                        <span className="font-semibold">{addresse.city} {addresse.zipcode}</span>
                    </div>
                    <button className="text-primary-dark hover:scale-125"><FaPen /></button>
                </div>
            ))}
            <button className="btn-primary-outline py-2 px-6 self-end flex items-center gap-2">
                <FaPlus />
                Ajouter une adresse
            </button>
        </div>
    );
};

export default AddresseSection;