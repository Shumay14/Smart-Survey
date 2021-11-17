pragma solidity >=0.4.22 <0.9.0;

import "../models/createJWT.ts";

contract registryDID {

  address owner;
  uint owner_id;

  repository[] public dids;

  modifier isOwner(uint _owner) {
        require(dids[_owner].owner == msg.sender);
        _;
    }

  mapping(address => getDID) public registeredDid;

  // get enhashed data
  struct getDID {
      bytes32 encryptName;
      bytes32 encryptAge;
      bytes32 encryptMender;
      bytes32 encryptMarried;  
  }
  
  function setAddress (address _address) public {      
        dids.push(_address);
        owner_id = dids.length;
  }

  

   function createCredential(string memory _name) public contractIsDIDOwner(_DIDRepositoryAddress, DID_Id) returns(bool){
        credentialOwner.push(driveLicense( _name));

        emit DIDCreated(msg.sender, didId);
        return true;
    }
  



}