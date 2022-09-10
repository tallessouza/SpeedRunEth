// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Token {
    uint256 public constant TOTAL_SUPPLY = 1000;
    uint256 public constant MINT_PRICE = 0.01 ether;
    uint256 public mintedTokens = 0;
    address public immutable owner;
    
    event Buy(address indexed buyer);

    mapping (address => uint256) public balanceOf;

    modifier onlyOwner {
       require(msg.sender == owner, "Only Owner can execute");
       _;
    }

    struct Vote {
        address voter;
        bool selection;
    }

    Vote[] public votes;
    constructor() {
        owner = msg.sender;
    }

    function create(uint256 _qtd) public onlyOwner {
        require(_qtd + mintedTokens <= TOTAL_SUPPLY, "Cannot mint more tokens");
        balanceOf[msg.sender] += _qtd;
        mintedTokens += _qtd;
    }

    function transfer(address _to, uint256 _qtd) public {
        require(balanceOf[msg.sender] >= _qtd, "Quantity less than balance.");
        balanceOf[msg.sender] -= _qtd;
        balanceOf[_to] += _qtd;
    }
    function buy() public payable {
        require(msg.value == MINT_PRICE, "Incorrect ETH amount");
        require(mintedTokens < TOTAL_SUPPLY, "Total Supply reached");
        balanceOf[msg.sender] += 1;
        mintedTokens += 1;
        
        emit Buy(msg.sender)
    }

    function withdraw() public onlyOwner {
        (bool sent, bytes memory data) = owner.call{value: address(this.balance)("")};
        require(sent, "Failed to send Ether");
    }
    receive() external payable {

    }
}