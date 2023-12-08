import { TbTruckDelivery } from "react-icons/tb";

export const AvantagePP = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h4 className="text-2xl font-medium uppercase">Profitez des services pixel perfect</h4>
            <div className='flex flex-col gap-4 lg:flex-row'>
                <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                    <TbTruckDelivery size={100} />
                    <div>
                        <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                        <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                    </div>
                </div>
                <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                    <TbTruckDelivery size={100} />
                    <div>
                        <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                        <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                    </div>
                </div>
                <div className='flex gap-4 bg-secondary p-4 rounded-3xl'>
                    <TbTruckDelivery size={100} />
                    <div>
                        <h5 className='text-xl font-semibold'>Paiement 4X sans frais</h5>
                        <p className='text-lg font-semibold'>Profitez du règlement en plusieurs fois sur des milliers d’articles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};