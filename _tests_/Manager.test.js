const Manager = require ('../lib/Manager.js');

test('Manager Test', () =>{
    const manager = new Manager('Maks', 1,'maks@gmail.com',1)

    expect(manager.name).toBe('Maks');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('maks@gmail.com');
    expect(manager.officeNumber).toBe(1);
    expect(manager.getName()).toBe('Maks');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('maks@gmail.com');
    expect(manager.getRole()).toBe('Manager');
})