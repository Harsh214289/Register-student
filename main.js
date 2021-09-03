var students= [];
function list_n(){
    var s1= document.getElementById("1st").value;
    var s2= document.getElementById("2nd").value;
    var s3= document.getElementById("3rd").value;
    var s4= document.getElementById("4th").value;
    var s5= document.getElementById("5th").value;
    students.push(s1);
    students.push(s2);
    students.push(s3);
    students.push(s4);
    students.push(s5);
    document.getElementById("list").style.display="inline-block";
    document.getElementById("list_p").innerHTML=students;
    document.getElementById("showing").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
    
}
function sort_n(){
    var sort_array= students.sort();
    document.getElementById("s_list").style.display="inline-block";
    document.getElementById("s_list_p").innerHTML=sort_array;
}