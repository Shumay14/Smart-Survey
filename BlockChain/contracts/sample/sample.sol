pragma solidity 0.8.6;

contract test{
    
    string fName;
    uint age;
    
    event Instructor(
        string name,
        uint age);
        
    function setInstructor(string memory _fName, uint _age) public {
        fName = _fName;
        age = _age;
        emit Instructor(_fName, _age);
    }
    function getInstructor() view public returns(string memory, uint){
        return (fName, age);
    }
}


contract IDENTIFICATION_CARD{
    
    mapping (address => identificationCard) identificationCardOwner;
    
    struct identificationCard {
        string name;
        string registrationNumber;
        string residence;
        
        string issueDate;
        string issuer;
        string issuerSignature;
        
        string fingerprint;
    }
    
    bytes32 testhash;
    
    function createVC(string memory _name, string memory _registrationNumber, string memory _residence, string memory _issueDate, string memory _issuer, string memory _issuerSignature, string memory _fingerprint) public returns (bool){
        identificationCardOwner[msg.sender] = identificationCard(
            _name,
            _registrationNumber,
            _residence,
            
            _issueDate,
            _issuer,
            _issuerSignature,

            _fingerprint
        );
        return true;
    }
    
    function getVC() view public returns (string memory){
        return identificationCardOwner[msg.sender].name;   
    }
    
    function setHash(string memory _test) public {
        testhash = keccak256(abi.encodePacked(_test));
    }
    
    function getHash(string memory _test) public pure returns (bytes32){
        return keccak256(abi.encodePacked(_test));
    }
    
    function verifyhash(string memory _test) public view returns (string memory) {
        
        if(testhash == keccak256(abi.encodePacked(_test))){
            return "Hello";
        }
        
        else{
            return "wrong";
        }
    }
}