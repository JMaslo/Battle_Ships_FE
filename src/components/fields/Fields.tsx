export default function Fields() {
    return (
        <div className="flex justify-center">
            <table className="border-collapse">
                <tbody>
                    {Array.from({ length: 10 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                {Array.from({ length: 10 }).map((_, colIndex) => (
                <td key={colIndex} className=" w-7 h-7 border border-solid border-gray-500 bg-sky-200"></td>
                ))}
                </tr>))}
                </tbody>
            </table>
        </div>
        
    )
}