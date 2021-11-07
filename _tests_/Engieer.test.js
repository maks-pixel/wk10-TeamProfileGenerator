const Engineer = require('../lib/Engineer.js');

test('Engineer Test', () =>{
    const engineer = new Engineer('Maks', 1,'maks@gmail.com','github.com/maks-pixel')

    expect(engineer.name).toBe('Maks');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('maks@gmail.com');
    expect(engineer.github).toBe('github.com/maks-pixel')
    expect(engineer.getName()).toBe('Maks');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('maks@gmail.com');
    expect(engineer.getGithub()).toBe('github.com/maks-pixel');
    expect(engineer.getRole()).toBe('Engineer');
})