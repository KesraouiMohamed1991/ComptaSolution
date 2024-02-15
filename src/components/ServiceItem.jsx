/* eslint-disable react/prop-types */

function ServiceItem({ service }) {
  return (
    <div className="border w-full  my-8 p-4 bg-neutral-50 flex flex-col sm:flex-row items-center justify-center rounded-lg shadow">
      <div className=" w-full  sm:w-1/3 p-4 rounded-t-lg flex items-start  h-full justify-start sm:rounded-t-none sm:rounded-l-lg">
        <h1 className="text-lg font-bold sm:text-start ">{service.title}</h1>
      </div>
      <div className=" w-full sm:w-2/3 p-6 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg sm:border-l border-blue-100">
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
