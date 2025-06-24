function Form({ children, onSubmitHandler }) {
  return (
    <form onSubmit={onSubmitHandler} className="flex w-96 flex-col gap-3">
      {children}
    </form>
  );
}

export default Form;
