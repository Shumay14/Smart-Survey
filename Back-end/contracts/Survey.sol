pragma solidity 0.8.7;

contract Survey{
    
    struct SurveyItem{
        address owner;
        
        uint totalAmount; // 설문 보상 총액
        uint userLimit; // 
        uint currentUser; //현재 설문에 참여 한 인원 수
        uint currentAmount;
        
        mapping(address => uint) userState;
    }
    
    uint surveyCount = 0; // 설문지 생성 갯수 
    mapping(uint => SurveyItem) surveyInfo; // 설문지 정보 리스트
    
    // OK 설문 금액 예치, 설문 생성자 주소등록 및 최대 참여 인원수 지정
    function createSurvey(address _owner, uint _userLimit) public payable{
        surveyInfo[surveyCount].owner = _owner;
        surveyInfo[surveyCount].totalAmount = msg.value;
        surveyInfo[surveyCount].currentAmount = msg.value;
        surveyInfo[surveyCount].userLimit = _userLimit;
        surveyCount += 1;
    }
    
    // 설문에 참여한 유저를 등록함
    function addUser(uint surveyIndex, address payable _to) public returns (address){
        //require(userState[_to] != 1 && currentUser < userLimit && msg.sender == _to);
        require(surveyInfo[surveyIndex].userState[_to] != 1 && 
                surveyInfo[surveyIndex].currentUser < surveyInfo[surveyIndex].userLimit &&
                msg.sender == _to
        );
        
        surveyInfo[surveyIndex].currentUser += 1;
        surveyInfo[surveyIndex].userState[_to] = 1;
        
        claimReward(surveyIndex, _to);
        return _to;
    }
    
    // OK 전체 설문 갯수를 반환함
    function getNumOfSurvey() public view returns(uint){
        return surveyCount;
    }
    
    // OK 설문지 생성자 주소를 반환함
    function getSurveyOwner(uint surveyIndex) public view returns(address){
        return surveyInfo[surveyIndex].owner;
    }
    
    // OK 현재 참여한 유저수를 반환함  
    function getCurrentUserNumber(uint surveyIndex) public view returns (uint256){
        return surveyInfo[surveyIndex].currentUser;
    }
    
    // OK 참여 가능한 최대 유저수를 반환함
    function getUserLimit(uint surveyIndex) public view returns (uint256){
        return surveyInfo[surveyIndex].userLimit;
    }
    
    // OK 설문에 참여한 유저에게 보상을 줌 
    function claimReward(uint surveyIndex, address payable _to) private {
        uint reward = surveyInfo[surveyIndex].totalAmount / surveyInfo[surveyIndex].userLimit;
        _to.transfer(reward);
        
        surveyInfo[surveyIndex].currentAmount = reward;
    }
    
    // OK 설문 취소 시 설문 생성자에게 남은 금액 반환
    function close(uint surveyIndex, address payable _to) public{
        require(msg.sender == surveyInfo[surveyIndex].owner);
        
        _to.transfer(surveyInfo[surveyCount].currentAmount);
    }
}
