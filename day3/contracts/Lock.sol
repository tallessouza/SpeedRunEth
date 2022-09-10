// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Lock {
    string greet = "";
    constructor() payable {
        greet = "Hello";
    }
    function greeting() public view returns (string memory) {
        console.log(greet);
        return greet;
    }
    function setGreet(string memory _greet ) public {
        greet = _greet;
    }
}
