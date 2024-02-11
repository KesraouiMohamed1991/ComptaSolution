/* eslint-disable react/prop-types */

function ServiceItem({ service }) {
  return (
    <div className="border w-full my-8 p-4 bg-gray-100 flex flex-col sm:flex-row items-center justify-center rounded-lg shadow-md">
      <div className=" w-full sm:w-1/3 p-4 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg">
        <h1 className="text-lg font-bold sm:text-start text-center">
          {service.title}
        </h1>
      </div>
      <div className=" w-full sm:w-2/3 p-6 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg">
        <ul className="list-disc rounded-md list-inside">
          {service.description.map((desc, i) => (
            <li key={i} className="text-base  mb-2">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceItem;
