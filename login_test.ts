Feature('login');

Scenario('Test Redirection', async ({ I }) => {
    I.amOnPage('/muj/prihlaseni');
    I.see('Přihlášení do Můj Vodafone');
});
