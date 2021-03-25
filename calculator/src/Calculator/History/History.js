import React, {useState} from 'react';

function History(props) {
    const[rows, changeRows] = useState([]);

    const addToHistory = (entry) => {
        changeRows(rows.concat([entry]));
    }

    const generateRows = () => {
        changeRows(rows.map((b, i) =>
            <tr key={i}>
                <td>{b}</td>
            </tr>
        ));
    }

    return (
        <div>
            History
            <table>
                <tbody>
                    {generateRows()}
                </tbody>
            </table>
        </div>
    );
}

export default History;