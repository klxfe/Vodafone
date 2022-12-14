Feature('login');   



Scenario('Test Log In', async ({ I }) => {
    I.amOnPage('/muj/prihlaseni');
    I.wait(3);
    if(I.see('Vodafone Cookies')){
        I.click('Povolit nezbytné');
    }
    I.see('Přihlášení do Můj Vodafone');
    I.fillField('Telefonní číslo, e-mail, číslo služby', '773088835');
    I.fillField('Napište své heslo', 'xxx');
    I.click('Přihlásit se');
    I.wait(5);
});
