import SearchbarLayout from "./SearchbarLayout";

function SearchbarContainer() {
  return (
    <section
      className={`sticky top-0 z-[1000] h-20 w-full pt-4 backdrop-blur-md max-[1200px]:left-0`}
    >
      <SearchbarLayout />
    </section>
  );
}

export default SearchbarContainer;
