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

  function getVC(address _owner) public {
    bool check = false;

    for (uint i = 0; i < repositoryVC.length; i++) {
      if (repositoryVC[i] == msg.sender) {
          check = true;
          return repositoryVC[msg.sender];
      } else if(repositoryVC[i] != msg.sender){
          
      }
    }

    if (check == false) {
        revert("Your address is not allowed. First of all, set your address.");
    }
  }
    


}