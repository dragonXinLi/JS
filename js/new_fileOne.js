"use strict"

function* next_id(){
	var current_id;
	yield current_id ++;
	return current_id;
}
function aaa()
{
	print("ssssss");
	
}

function bbb()
{
// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        alert('测试失败!');
        break;
    }
}
if (pass) {
    alert('测试通过!');
}
}


//alert("hello");
