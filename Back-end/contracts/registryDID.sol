pragma solidity >=0.4.22 <0.9.0;


contract registryDID {

  mapping(address => bytes32) public registeredVC;
  address owner;
  bytes32 didVC;
//   uint owner_id;

  bytes32[] public repositoryVC;

  modifier isOwner(uint _owner) {
        require(repositoryVC[_owner].owner == msg.sender);
        _;
  }

  
  function registerVC(bytes32 _didVC) public {
      repositoryVC.push(_didVC);
  }
  
  
  function setAddress (address _address) public {      
        R.push(_address);
        owner_id = dids.length;
  }

  

   function createCredential(string memory _name) public contractIsDIDOwner(_DIDRepositoryAddress, DID_Id) returns(bool){
        credentialOwner.push(driveLicense( _name));

        emit DIDCreated(msg.sender, didId);
        return true;
    }
  



}