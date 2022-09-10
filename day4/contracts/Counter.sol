// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint256 public count;
    address public owner;

    modifier onlyOwner {
       require(msg.sender == owner, "Only Owner can execute");
       _;
    }
    constructor(uint256 _initialCount) {
        count = _initialCount;
        owner = msg.sender;
    }
    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public onlyOwner {
        // This function will fail if count = 0
        count -= 1;
    }
}
