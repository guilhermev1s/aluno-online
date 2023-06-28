describe('Teste aluno-online', () => {
  it('novo requerimento', () => {
    cy.visit('http://localhost:3000/requerimentos')
    cy.get('.btn').click()    
    cy.get('#inputDisciplina').select('ADS030 - Manuntenção de Software e DevOPs')
    cy.get('#inputProva').select('A2')
    cy.get('#inputArgumentacao').type('nota 10')
    cy.get('.btn-success').click()
  })
})