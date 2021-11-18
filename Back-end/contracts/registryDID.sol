pragma solidity >=0.4.22 <0.9.0;


contract registryDID {

  // string[] public didVCs;

  // string[] public repositoryVC;
  // mapping(address => didVCs[]) public repositoryVC;
  mapping(address => string[]) public repositoryVC;
  
  // struct didVCs {
  //   address owner;
  //   string didVC;
  // }

  address owner;
  string didVC;
  

  // modifier isOwner(address _owner) {
  //   address[] memory ownedVC = repositoryVC[_owner];
  //   require(ownedVC == msg.sender);
  //   _;
  // }

  
  function registerVC(address _owner, string _didVC) public {
    require(msg.sender == _owner);
    repositoryVC[_owner].push(_didVC);
  }


  function getVC(address _owner) public view {
    bool check = false;

    for (uint i = 0; i < repositoryVC.length; i++) {
      if (repositoryVC[i] == msg.sender) {
          check = true;
          return repositoryVC[msg.sender];
      } else if(repositoryVC[i] != msg.sender){
          // nothing
      }
    }

    if (check == false) {
        revert("Your address is not allowed. First of all, set your address.");
    }
  }
    


}