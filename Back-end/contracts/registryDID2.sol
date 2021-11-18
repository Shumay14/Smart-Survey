pragma solidity >=0.4.22 <0.9.0;


contract registryDID {

  struct repositoryVC {
      string nameVC;
      string genderVC;
      string ageVC;
  }

  mapping (address => repositoryVC) ownerVCs;

  address[] public ownerAddresses;


  function registerVC (string memory _nameVC, string memory _genderVC, string memory _ageVC) public {
      ownerVCs[msg.sender].nameVC = _nameVC;
      ownerVCs[msg.sender].genderVC = _genderVC;
      ownerVCs[msg.sender].ageVC = _ageVC;

      ownerAddresses.push(msg.sender);
  }

//   function getVCs (address _owner) external view returns(address[]) {
//       repositoryVC memory repo = ownerAddresses[_owner];
//       return (
//           repo.nameVC,
//           repo.genderVC,
//           repo.ageVC
//       );
//   }    


}