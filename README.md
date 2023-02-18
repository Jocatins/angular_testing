# AngularUnitTest

# spyOn and createSpyObject

`spyOn` is a function that allows you to create a "spy" on an existing function or method.
A spy is a function that can be used to track the calls to the original function, as well as modify its behavior during tests.

it('should call myFunction', () => {
const myObject = {
myFunction: () => {}
};

spyOn(myObject, 'myFunction');

myObject.myFunction();

expect(myObject.myFunction).toHaveBeenCalled();
});

`createSpyObject` is a function that allows you to create a mock object with multiple methods.
This is useful when you want to test a component that depends on a service,
but you don't want to actually use the real service during testing.

it('should call myService.getUsers', () => {
const myService = jasmine.createSpyObj('MyService', ['getUsers']);

myService.getUsers.and.returnValue(of([]));

myComponent.ngOnInit();

expect(myService.getUsers).toHaveBeenCalled();
});
