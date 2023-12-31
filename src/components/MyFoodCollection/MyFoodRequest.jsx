import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const MyFoodRequest = ({myFood}) => {
    console.log(myFood)
    const {_id ,donator, pickup_location, requested_date, donation_amount} = myFood;

    const handleCencel = (_id) => {
     
        axios.delete(`https://community-food-sharing-server-ruddy.vercel.app/myfoodrequest/${_id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                toast.success('Deleted!');
                window.location.reload();
            }
        })
      
    }
    return (
        <div className="flow-root rounded-lg border border-gray-300 py-3 shadow-sm my-4">
        <dl className="-my-3 divide-y divide-gray-100 text-sm" data-aos="zoom-in-down">
            <div data-aos="zoom-in-down"
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
                <dt className="font-medium text-gray-900">Donar Name</dt>
                <dd className="text-gray-700 sm:col-span-2">{donator}</dd>
            </div>

            <div data-aos="zoom-in-down"
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
                <dt className="font-medium text-gray-900">Pickup Location</dt>
                <dd className="text-gray-700 sm:col-span-2">{pickup_location}</dd>
            </div>

            <div data-aos="zoom-in-down"
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
                <dt className="font-medium text-gray-900">Request Date</dt>
                <dd className="text-gray-700 sm:col-span-2">{requested_date}</dd>
            </div>

            <div data-aos="zoom-in-down"
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
                <dt className="font-medium text-gray-900">Your Donation Amount</dt>
                <dd className="text-gray-700 sm:col-span-2">{donation_amount}h</dd>
            </div>

            <div data-aos="zoom-in-down"
                className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
                <dd className="text-gray-700 sm:col-span-2">
                    <button onClick={()=>handleCencel(_id)} className="btn bg-indigo-600 hover:bg-indigo-700 text-white">Cencel Order</button>
                </dd>
            </div>
        </dl>
        <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
    </div>
    );
};

export default MyFoodRequest;
