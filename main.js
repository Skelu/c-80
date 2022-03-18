name_student_array=[];
var display_student_array=[];
function submit(){
    for (var j=1;j<=4;j++){
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        console.log (student_name);
        name_student_array.push(student_name); 
}

var length_student_array=name_student_array.length;
console.log (length_student_array);
for (var k=0;k<length_student_array;k++){
 display_student_array.push("<h4>name-"+name_student_array[k]+"</h4>");
 console.log (display_student_array);
}
console.log (display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
name_student_array.sort();
var display_student_array_sorting=[];
var length_student_array=name_student_array.length;
console.log (length_student_array);
for (var k=0;k<length_student_array;k++){
    display_student_array_sorting.push("<h4>name-"+name_student_array[k]+"</h4>");
    console.log (display_student_array);
    var remove_commas=display_student_array_sorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
}
