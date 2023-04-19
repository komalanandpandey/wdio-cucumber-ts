import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';
import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


const pages = {
    login: LoginPage,
   
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


Given(/^I check rowHash method$/, async (data) => {
   // console.log(data);
    let rows = data.rowsHash();
    //console.log(rows.username +" and "+ rows.password);
  

    //await LoginPage.login(username, password)
});

Given(/^I check Hashes method$/, async (data) => {
    //console.log(data);
    let rows = data.hashes();
    let userNameList: string[]=[];
    let passwordList: string[]=[];
   rows.forEach(function(row:any){
    userNameList.push(row.username);
    passwordList.push(row.password)

   })
//    console.log(userNameList)
//    console.log(passwordList)

   //To compare two list
   let missing = userNameList.filter(items =>passwordList.indexOf(items) <0)
  if(missing.length =0){
    //console.log("test caser passed")
  }else{
    //console.log("Test failed")
  }

 });

 Given(/^I check rows method$/, async (data) => {
     let rows = data.rows();
     //console.log(rows)
     //console.log(rows[1][0]);

 });

Given(/^I navigate to test web url$/, async (data) => {
    let rows = data.rowsHash();
    await browser.url(rows.url);
    browser.maximizeWindow();
   
});

Then(/^I click on signup page$/, async () => {
    await $("//a[contains(text(),'SignUp Form')]").click();
    await $('label#lblname').waitForDisplayed();
    let elem = $('label#lblname');
    pages.login.waitUntilElementVisible(elem,"Full Name","Registratio page not found!")
});

Given(/^I navigate to google homepage$/,async(data) =>{
    let url = data.rowsHash().url;
    browser.url(url)
    browser.maximizeWindow();
}) 

Then(/^I check below mentioned components$/, async(data: DataTable) =>{

    async function validateComponents(){
        let tableData = data.hashes();
        console.log("len="+tableData.length);
        for(let i=0;i<tableData.length;i++){
            // await console.log(tableData[i].components);
            switch(tableData[i].components){
                case "Google Logo":
                    let elem = $('img.lnXdpd');
                    expect(await elem.isDisplayed()).toBe(true);
                    expect(await elem.isDisplayed())
                    console.info("Pass : Validated google logo")
                    break;
                case 'search text WDIO':
                    console.info("IN SEARCH")
                    let searchElem = $('//textarea[@id="APjFqb"]');
                    await searchElem.setValue("WDIO")
                    browser.pause(5000)
                    browser.keys('Escape');
                    browser.pause(2000)
                    console.info("Pass : Search text validated")
                    break;
                case 'Google search button':
                    console.info("IN GSB")
                    browser.pause(5000);
                    await $('//div[@class="lJ9FBc"]/center/input[1]').moveTo();
                    browser.pause(5000);
                    let searchButtoElem = $('//div[@class="lJ9FBc"]/center/input[1]');
                    // console.log(await searchButtoElem.isFocused());
                    await searchButtoElem.click();
                    let searchResult = $('//a[@href="https://webdriver.io/"]/h3')
                    let expectedRes = (await searchResult.getText()).trim();
                    expect(expectedRes).toBe('WebdriverIO · Next-gen browser and mobile automation test ...')
                    browser.pause(2000);
                    break;
                    
                case 'I am feeling lucky button':
                    console.info("IN IMFL")
                    await browser.back();
                    await browser.pause(2000);
                    const iframe = await $('//iframe[@name="callout"]');
                    await browser.switchToFrame(iframe);
                    await browser.pause(2000);
                    await $('//button[@aria-label="No thanks"]').moveTo();
                    await browser.pause(2000);
                    (await $('//button[@aria-label="No thanks"]')).click();
                    await browser.pause(2000);
                    //let fluckElem = await $("//div[@class='lJ9FBc']/center/input[2]");
                    //browser.executeScript(() => {"document.getElementByName('#RNmpXc').click()"},'gh')
                    // (await $('//textarea[@id="APjFqb"]')).moveTo();
                    // await fluckElem.moveTo();
                    // await fluckElem.click();
                    // await browser.positionClick()
                    // browser.pause(5000);
                    // console.error((await $('//div[@class="lJ9FBc"]/center/input[2]')).isClickable());
                    // await browser.waitUntil(() => $('//div[@class="lJ9FBc"]/center/input[2]').isClickable())
                    // await (await $('//div[@class="lJ9FBc"]/center/input[1]')).click();
                    // console.info("Pass : Feeling lucky button validated")
                    break;  
                default:
                    console.error("Not a valid option") 
                    break; 

            }
        }

        } 
        await validateComponents();  
         
})


