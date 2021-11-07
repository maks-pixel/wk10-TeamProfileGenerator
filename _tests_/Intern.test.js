const Intern = require('../lib/Intern.js');

test('Intern Test', () =>{
    const intern = new Intern('Maks', 1,'maks@gmail.com','UofT')

    expect(intern.name).toBe('Maks');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('maks@gmail.com');
    expect(intern.school).toBe('UofT');
    expect(intern.getName()).toBe('Maks');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('maks@gmail.com');
    expect(intern.getSchool()).toBe('UofT');
    expect(intern.getRole()).toBe('Intern');
})