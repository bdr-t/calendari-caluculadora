export function convertTime(date){
    let sprintDataArr1 = date.split("/");
    let newSprintDate1 = sprintDataArr1[1] + "/" + sprintDataArr1[0] + "/" + sprintDataArr1[2];
    return newSprintDate1
}