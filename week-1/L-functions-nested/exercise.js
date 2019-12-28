function getGroupPercentage(numberOfStudents, numberOfMentors){
    var total = numberOfStudents + numberOfMentors;
    var studentPrecisePercentage = numberOfStudents / total * 100;
    var studentRoundPercent = Math.round(studentPrecisePercentage);

    var mentorPrecisePercentage = numberOfMentors / total * 100;
    var mentorRoundPercent = Math.round(mentorPrecisePercentage);
    
    return (
        `Student Percent: ${studentRoundPercent}%. Mentor Percent: ${mentorRoundPercent}%.`
         )
}

console.log(getGroupPercentage(15, 8));
