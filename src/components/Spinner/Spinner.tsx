const Spinner = () => {
  return (
    <div className={"spinner-border  text-primary z-2 position-fixed end-50"} role={"status"}>
      <span className={"visually-hidden"}>Loading...</span>
    </div>
  );
};

export default Spinner;