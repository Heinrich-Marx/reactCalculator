describe('Test Routing', () => {
  it('should navigation', () => {
    cy.visit('/');
    cy.visit('/setting');
  });
});

describe('Test Setting Page', () => {
  it('should Elements to setting Pages', () => {
    cy.visit('/setting');
    cy.get('h2').should('have.text', 'Setting');
    cy.get('h3').should('have.text', 'Switch Theme');
    cy.get('p').should('have.text', 'Light ThemeDark ThemeColored Theme');
    cy.get('button').should('have.text', 'Clear All History');
  });
});

describe('Test Change Themes', () => {
  it('should change Themes', () => {
    cy.visit('/setting');
    cy.get('span').click();
    cy.get('p[value="darkTheme"]').click();
    cy.get('span').contains('Dark Theme');
    cy.get('span').click();
    cy.get('p[value="ColoredTheme"]').click();
    cy.get('span').contains('Colored Theme');
    cy.get('span').click();
    cy.get('p[value="lightTheme"]').click();
    cy.get('span').contains('Light Theme');
  });
});

describe('Test Clear Story', () => {
  it('should clear story', () => {
    cy.visit('/setting');
    cy.get('button').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        operators: { value: '0', operator: null },
        history: {
          array: [],
        },
        switchTheme: { value: 'Light Theme', string: 'light' },
      });
  });
});

describe('Test Buttons on Home Page', () => {
  it('should buttons', () => {
    cy.visit('/');
    cy.get('button').should('have.text', 'C789*-456/+123=.(0)CE%+/-');
  });
  it('click button', () => {
    cy.visit('/');
    cy.get('button').contains('3').click();
    cy.get('div[name="fieldWithCalc"]').contains('3');
    cy.get('button').contains('7').click();
    cy.get('div[name="fieldWithCalc"]').contains('37');
    cy.get('button').contains('+').click();
    cy.get('div[name="fieldWithCalc"]').contains('37+');
    cy.get('button').contains('2').click();
    cy.get('div[name="fieldWithCalc"]').contains('37+2');
    cy.get('button').contains('=').click();
    cy.get('div[name="fieldWithCalc"]').contains('39');
    cy.get('button').contains('2').click();
    cy.get('div[name="fieldWithCalc"]').contains('392');
    cy.get('button').contains('C').click();
    cy.get('div[name="fieldWithCalc"]').contains('39');
    cy.get('button').contains('+/-').click();
    cy.get('div[name="fieldWithCalc"]').contains('-39');
    cy.get('button').contains('CE').click();
    cy.get('div[name="fieldWithCalc"]').contains('0');
  });
});

describe('Test History', () => {
  it('should history Change', () => {
    cy.visit('/');
    cy.get('button').contains('3').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('=').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        operators: { value: '40', operator: null },
        history: {
          array: ['32+8'],
        },
        switchTheme: { value: 'Light Theme', string: 'light' },
      });
    cy.get('button').contains('*').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        operators: { value: '120', operator: null },
        history: {
          array: ['32+8', '40*3'],
        },
        switchTheme: { value: 'Light Theme', string: 'light' },
      });
  });

  it('should clear History', () => {
    cy.get('a').contains('Setting').click();
    cy.get('button').click();
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        operators: { value: '0', operator: null },
        history: {
          array: [],
        },
        switchTheme: { value: 'Light Theme', string: 'light' },
      });
  });
});
//(5+3*2+8)/(2+12)+3
describe('Test Calculating', () => {
  it('should correct answer', () => {
    cy.visit('/');
    cy.get('button').contains('(').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('(').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('div[name="fieldWithCalc"]').contains('4.357');
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        operators: { value: '4.357', operator: null },
        history: {
          array: ['(5+3*2+8)/(2+12)+3'],
        },
        switchTheme: { value: 'Light Theme', string: 'light' },
      });
  });
});
