// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

contract CryptoTokens {
    string public constant name = "Cryptos";
    uint supply;
    address public owner;

    constructor(uint _supply) {
        supply = _supply;
        owner = msg.sender;
    }

    function setSupply(uint _supply) public {
        supply = _supply;
    }

    function getSupply() public view returns(uint) {
        return supply;
    }
}