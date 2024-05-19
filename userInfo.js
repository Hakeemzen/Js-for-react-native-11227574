function createUserProfiles(originalNames, modifiedNames) {
    var profiles = [];
    
    var id = 1;
    
    for (var i = 0; i < originalNames.length; i++) {
        var userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: id
        };
        
        id++;
        
        profiles.push(userProfile);
    }
    
    return profiles;
}


var originalNames = ["Alice", "Bob", "Charlie"];
var modifiedNames = ["alice", "BOB", "charlie"];
var userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

var inputArray = [1, 2, 3, 4, 5];
var outputArray = processArray(inputArray);
console.log(outputArray);