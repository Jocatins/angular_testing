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

# @ViewChild

@ViewChild is a decorator in Angular that is used to access a child component, directive, or DOM element from a parent component.

The @ViewChild decorator can be used in two ways:
`1` To get a reference to a single child component or directive:

@ViewChild(childComponent) childComponent : ChildComponent

This syntax declares a property named childComponent and assigns it a reference to the first instance of MyChildComponent found in the parent component's view.

`2` To get a reference to a single DOM element:

@ViewChild('myDiv') myDiv: ElementRef;

The decorator takes in two arguments, a selector that identifies the child element or component,
and an options object that specifies whether the query should be static or dynamic

# Component Fixture

It has the component instance and the native element to access the component template, component's
methods and functions. Its data-type is any.
The angular fixture provides the component's element directly through the fixture.nativeElement

The `DebugElement` offers query methods that work on all supported platforms
