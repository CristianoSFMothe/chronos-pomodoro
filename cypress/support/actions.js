function waitElement(el) {
  try {
    cy.log('Aguardando o elemento ' + el + 'está visível');
    cy.get(el).and('be.visible');
    cy.log('Encontrou o elemento ' + el);
  } catch (error) {
    cy.log('Exceção capturada: ' + error.message);
  }
  return waitElement;
}

function set(el, text) {
  if (text != null) {
    cy.get(el)
      .should('be.visible')
      .clear()
      .type(text)
      .then(() => {
        cy.log(`Setou o valor "${text}" no elemento ${el}`);
      });
  } else {
    cy.log(`Campo ${el} ignorado porque valor é null ou undefined`);
  }

  return set;
}

function click(el) {
  waitElement(el);
  try {
    cy.get(el).click();
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return click;
}

function get_text(el) {
  waitElement(el);
  let text;
  try {
    text = cy.get(el).invoke('text');
  } catch (error) {
    cy.log('Exception caught: ' + error.message);
  }
  return text;
}

module.exports = {
  waitElement,
  set,
  click,
  get_text,
};
