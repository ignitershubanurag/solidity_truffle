// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract demo {
    uint public num1;
    constructor(uint _num){
        num1 = _num;
    }
    function updateNum(uint _num) public {
        num1 = _num;
    }

    function getNum() public view returns(uint){
        return num1;
    }
}
