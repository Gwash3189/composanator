describe("composanator", function() {
	it("Should accept a variable amount of arguments", function() {
		var noop = function(){};
		
		expect(compose(noop, noop, noop)).not.toThrow();
		expect(compose(noop, noop)).not.toThrow();
	});
	it("Should call each function passed to it", function() {
		var spec = {
			func: function(){return true},
			noop: function(){return true}
		};

		spyOn(spec, "func")
		spyOn(spec, "noop")

		compose(spec.noop, spec.func)();

		expect(spec.func).toHaveBeenCalled();
		expect(spec.noop).toHaveBeenCalled();
	});
	it("Should pass each function the result of the previous function", function() {
		var spec = {
			func: function(){},
			noop: function(){return true}
		};

		spyOn(spec, "func").and.callThrough();
		spyOn(spec, "noop").and.callThrough();

		compose(spec.func, spec.noop)();

		expect(spec.func).toHaveBeenCalledWith(true);
	});
	it("Should return the result of the last function", function() {
		var spec = {
			func: function(){return false},
			noop: function(){return true}
		};

		expect(compose(spec.func, spec.noop)()).toBe(false)
	});
	it("Should pass the provided value to the first function run", function() {
		var spec = {
			func: function(value){return false},
			noop: function(){return false}
		};

		spyOn(spec, "noop");

		compose(spec.func, spec.noop)(true);

		expect(spec.noop).toHaveBeenCalledWith(true);
	});
	it("Should run through the functions in reverse order", function() {
		var spec = {
			func: function(value){if(value === 2){return value;} else{return -1}},
			noop: function(num){return num === 1 ? ++num : -1}
		};

		expect(compose(spec.func, spec.noop)(1)).toBe(2);
		expect(compose(spec.func, spec.noop)(0)).not.toBe(2);
	});

});