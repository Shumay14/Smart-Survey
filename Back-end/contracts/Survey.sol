pragma solidity 0.8.7;

contract Survey{
    
    address owner;
    uint deposite;
    uint userLimit;
    uint currentUser = 0;
    
    mapping(address => int) userState;
    
    
    // 설문 금액 예치, 설문 생성자 주소등록 및 최대 참여 인원수 지정
    constructor(address _owner, uint _userLimit) payable{
        owner = _owner;
        deposite = msg.value;
        userLimit = _userLimit;
    }
    
    // 설문에 참여한 유저를 등록함
    function addUser(address payable _to) public returns (address){
        require(userState[_to] != 1 && currentUser < userLimit && msg.sender == _to);
        
        currentUser += 1;
        userState[_to] = 1;
        
        claimReward(_to);
        return _to;
    }
    
    // OK 현재 참여한 유저수를 반환함  
    function getCurrentUserNumber() public view returns (uint256){
        return currentUser;
    }
    
    // OK 참여 가능한 최대 유저수를 반환함
    function getUserLimit() public view returns (uint256){
        return userLimit;
    }
    
    // OK 설문에 참여한 유저에게 보상을 줌 
    function claimReward(address payable _to) private {
        _to.transfer(deposite/userLimit);
    }
    
    // X 설문 취소 시 설문 생성자에게 남은 금액 반환
    function close(address payable _to) public{
        require(msg.sender == owner);
        
        _to.transfer(deposite);
        
    }
}
