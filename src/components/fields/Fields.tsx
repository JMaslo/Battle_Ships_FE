export default function Fields() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  const renderLetters = () => {
    return letters.map((letter, index) => <th key={index}>{letter}</th>);
  };

  const renderTableCells = () => {
    return numbers.map((number) => (
      <tr key={number}>
        <th>{number}</th>
        {letters.map((letter) => (
          <td key={letter + number} className="w-9 h-9 border border-solid border-gray-500 bg-sky-200"></td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="flex justify-around mt-10">
      <div className="flex">
        <table className="border-collapse mr-5">
          <thead>
            <tr>
              <th></th>
              {renderLetters()}
            </tr>
          </thead>
          <tbody>{renderTableCells()}</tbody>
        </table>
        <div className="text-sky-100 font-medium text-center mt-5 w-32 mx-auto">
          Vaše ponořené lodě:
        </div>
        <table className="border-collapse">
          <thead>
            <tr>
              <th></th>
              {renderLetters()}
            </tr>
          </thead>
          <tbody>{renderTableCells()}</tbody>
        </table>
      </div>
    </div>
  );
}