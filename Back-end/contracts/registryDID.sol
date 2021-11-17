pragma solidity >=0.4.22 <0.9.0;


contract registryDID {

  mapping(address => string[]) public repositoryVC;
  
  address owner;
  string didVC;
  

  modifier isOwner(address _owner) {
    require(repositoryVC[_owner] == msg.sender);
    _;
  }

  
  function registerVC(string _didVC) public {
      repositoryVC.push(msg.sender);
      repositoryVC[msg.sender].push(_didVC);
  }
    


}