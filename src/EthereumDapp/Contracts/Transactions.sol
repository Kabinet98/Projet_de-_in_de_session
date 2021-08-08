// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transactions {
    struct data {
        string UserId;
        string DonationKey;
        string DownloadedIndication;
    }
    mapping(uint => data) public store;
    function createTransaction(uint id, string memory UserId, string memory DonationKey, string memory DownloadedIndication) public {
        store[id].UserId = UserId;
        store[id].DonationKey = DonationKey;
        store[id].DownloadedIndication = DownloadedIndication;
    }
    function readTransaction(uint id) public view returns (string memory, string memory, string memory) {
        return (store[id].UserId, store[id].DonationKey, store[id].DownloadedIndication);
    }
}