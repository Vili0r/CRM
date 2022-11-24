import React, { useEffect, useState } from 'react';

const InvoiceTable = ({ data }) => {
  const [total, setTotal] = useState(0);
  
  
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for(let i=0; i < rows.length; i++){
      if(rows[i].className === "amount"){
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    };
  })

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {data.map(({ id, description, quantity, price, amount }) => (
            <tbody key={id}>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
              </tr>
            </tbody>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total. {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}

export default InvoiceTable