const time = () => new Date(Date.now())

describe('boston marathon hotels', () => {
  it('lists hotels', () => {

    cy.visit('https://book.passkey.com/event/50340171/owner/2559759/home')
    cy.contains('Make Reservation').click()
    cy.get('#check-in-date').click()

    cy.get('#checkin-datepicker a[title="April 15 event date"]').click()
    //cy.get('#checkin-datepicker a[title="April 19 event date"]').click()

    cy.get('#check-out-date').click()

    cy.get('#checkout-datepicker a[title="April 18 event date"]').click()
    //cy.get('#checkout-datepicker a[title="April 21"]').click()

    cy.get('#submitQuickBook').click()
    cy.get('#list-hotel .name span[role="heading"]').each(span => {
      cy.log(span.text())
      cy.task("log", `${time()} name: ${span.text().trim()}`)
    })
    cy.get('#list-hotel .price > span').each(span => {
      cy.log(span.text())
      cy.task("log", `${time()} price: ${span.text().trim()}`)
    })
    cy.get('#list-hotel .full p').each(span => {
      cy.log(span.text())
      cy.task("log", `${time()} address: ${span.text().trim()}`)
    })
    cy.screenshot()
  })
});