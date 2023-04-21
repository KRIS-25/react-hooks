const ErrorExample = () => {
  let count = 0;
  return (
    <>
      <h2>{count}</h2>
      <button
        className="btn"
        type="button"
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default ErrorExample;
