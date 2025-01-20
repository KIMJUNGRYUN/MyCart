import React from 'react'
import './Table.css';
                        //CartPage에서 headings props로 받아옴 children은 자식태글을 받아옴
const Table = ({headings, children}) => {
  return (
    <table className='common_table'>
		<thead>
			<tr>
				{headings.map((item, index) => (
                    <th key={index}>{item}</th>
                ))}
			</tr>
		</thead>
		{children}
	</table>
  );
};

export default Table