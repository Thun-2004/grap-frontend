import React from 'react';
import PurchaseCard from '../../components/PurchaseCard';

const PurchaseHistory = () => {
    return (
        <div className="p-7">
            <h1>Purchase History</h1>

            <div className="flex flex-col mt-12">
                <div className="flex justify-between space-x-10 mb-3">
                    <h2>Ongoing</h2>
                    <h2>Completed</h2>
                    <h2>Canceled/Failed</h2>
                </div>
                <hr className="border-t-2 border-gray-300 mb-3"/>
                <PurchaseCard date="1 Sep 24" time="11:09" name="Mc donalds" price="93" canteen="Prathep canteen" userLocation="Building A" orderStatus="Order completed"/>
                <PurchaseCard date="1 Sep 24" time="11:09" name="Mc donalds" price="93" canteen="Prathep canteen" userLocation="Building A" orderStatus="Order completed"/>
                <PurchaseCard date="1 Sep 24" time="11:09" name="Mc donalds" price="93" canteen="Prathep canteen" userLocation="Building A" orderStatus="Order completed"/>
            </div>
        </div>
    )
}

export default PurchaseHistory;