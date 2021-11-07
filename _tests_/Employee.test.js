const Employee = require('../lib/Employee.js');

test('Employee Tests', () =>{
    const employee = new Employee('Maks', 1,'maks@gmail.com')

    expect(employee.name).toBe('Maks');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('maks@gmail.com');
    expect(employee.getName()).toBe('Maks');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('maks@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});