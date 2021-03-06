import React from 'react';

function TransferList({ transfers, approveTransfer }) {
  return (
    <div>
      <h2>Transfers</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount (in wei)</th>
            <th>To</th>
            <th>Token</th>
            <th>Approvals</th>
            <th>Action</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>{transfer.tokenInUtf8}</td>
              <td>{transfer.approvals}</td>
              <td>
                <button onClick={() => approveTransfer(transfer.id)}>
                  Approve
                </button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferList;
