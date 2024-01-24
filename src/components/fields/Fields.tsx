export default function Fields() {
    return (
        <div className="flex justify-around mt-10">
            <table className="border-collapse">
                <tbody>
                    {Array.from({ length: 10 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                {Array.from({ length: 10 }).map((_, colIndex) => (
                <td key={colIndex} className=" w-9 h-9 border border-solid border-gray-500 bg-sky-200"></td>
                ))}
                </tr>))}
                </tbody>
            </table>
            <p className="text-sky-100 font-medium">Vaše ponořené lodě:</p>
            <table className="border-collapse">
                <tbody>
                    {Array.from({ length: 10 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                {Array.from({ length: 10 }).map((_, colIndex) => (
                <td key={colIndex} className=" w-9 h-9 border border-solid border-gray-500 bg-sky-200"></td>
                ))}
                </tr>))}
                </tbody>
            </table>
        </div>
        
    )
}