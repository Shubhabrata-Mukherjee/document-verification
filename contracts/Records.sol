pragma solidity ^0.4.11;

contract Records{
  bytes32[] public fileHashes;
  bytes32 fileHash;
  uint count;
  
  function Records()
  {
      count = 0;
  }
  
  function addRecord(bytes32 fileHash) public returns (uint) {
    if (count > 15) {
      revert();
    }

    fileHashes.push(fileHash);
    count++;
    return count-1;
  }
  
 function IsIdInArray(bytes32 fileHash1) constant returns (bool success){
  for (uint i = 0; i < fileHashes.length; i++) {
    if (fileHashes[i] == fileHash1)
      return true;
  }
  return false;
}

  function getRecord() constant public returns (bytes32[]) {
    return fileHashes;
  }  
}