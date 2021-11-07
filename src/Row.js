const Row = ({ letter }) => {
  return (
    <div>
      <span>{letter}</span>
      <input type="text" name="letter-row" />
    </div>
  );
};

export default Row;
