describe("Test Code", () => {
  it("웹 페이지 접속 후 검색창에 키워드 타이핑 및 검색 후 첫 번째 포스트 클릭", () => {
    cy.visit("https://www.naver.com");

    cy.get("#query").type("cypress").type("{enter}");

    cy.get(".total_tit").first().click();
  });
});
