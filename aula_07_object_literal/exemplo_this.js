function func(){
	console.log(this === global, this === obj);
	console.log("==============================")
}

var obj = {func};

func();
obj.func();
