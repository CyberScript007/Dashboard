function CreateBtn({ children }) {
  return (
    <button
      className={`rounded-md bg-blue-500 px-4 py-2 capitalize text-white`}
    >
      {children}
    </button>
  );
}

export default CreateBtn;
