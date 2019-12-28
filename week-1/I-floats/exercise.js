var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var studentPrecisePercentage = numberOfStudents / total * 100;
console.log(studentPrecisePercentage);
var studentRoundPercent = Math.round(studentPrecisePercentage);
console.log(studentRoundPercent);

var mentorPrecisePercentage = numberOfMentors / total * 100;
console.log(mentorPrecisePercentage);
var mentorRoundPercent = Math.round(mentorPrecisePercentage);
console.log(mentorRoundPercent);
