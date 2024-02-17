// eslint-disable-next-line react/prop-types
function Avis({ stars, avis, job, name, img }) {
  const starsIcons = Array.from({ length: Number(stars) }, (_, index) => (
    <svg
      key={`star-${index}`} // Use a unique key based on the index
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="orange"
      aria-hidden="true"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      ></path>
    </svg>
  ));

  return (
    <div className="relative  flex w-full max-w-[26rem] flex-col px-2 rounded-xl bg-blue-50 bg-clip-border border shadow text-gray-700 ">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
        <img
          src={img}
          alt={name}
          className="relative inline-block h-12 w-12 rounded-full object-cover "
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {name}
            </h5>
            <div className="5 flex items-center gap-0">{starsIcons}</div>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
            {job}
          </p>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {avis}
        </p>
      </div>
    </div>
  );
}

export default Avis;
