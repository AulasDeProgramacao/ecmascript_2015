function func(){
	console.log(this === global, this === obj);
}

var obj = {func};

func();
obj.func();
