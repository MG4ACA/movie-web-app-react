const Card = ({ key, props }) => {
  const { title, backdrop_path, vote_average, poster_path } = props;
  return (
    <div className="bg-dark-100 p-5 rounded-2xl w-3xs shadow-inner shadow-light-100/10 mb-[1rem] ">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="rounded-lg"
      />
      <p className="text-white text-left m-[0.5rem]">{title}</p>

      <div className="flex items-center m-[0.5rem]">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-yellow-300 mr-[0.5rem]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>

        <p className="text-gray-500">{vote_average}</p>
      </div>
    </div>
  );
};

export default Card;
