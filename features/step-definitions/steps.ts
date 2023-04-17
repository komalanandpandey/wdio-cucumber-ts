import { Given, When, Then } from '@wdio/cucumber-framework';
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

Then(/^I check below mentioned components$/, async(data) =>{
        let tableData = data.rows();
        //console.log(tableData);
         tableData.forEach(async item =>{
            switch(item.toString()){
                case "Google Logo":
                    
                    console.log((await pages.login.googleLogo).isDisplayed())
                    // let elem = $('img.lnXdpd');
                    //  let dis =  elem.getCSSProperty().then(function(){
                    //     return true;
                    // }).catch(function(){
                    //     console.log("sorry");
                    //     return false;
                    // });
               
            
                    // if(isDisplayed){
                    //     console.info("Pass: Google logo validated")
                    // }else{
                    //     console.error("Fail: Google logo not validated")
                    // }
                    break;
                case 'search text WDIO':
                    console.info("write code here for Search text")
                    break;
                case 'Google search button':
                    // $('//div[@class="lJ9FBc"]/center/input[1]')
                    console.info("write code here to Validate search button")
                    break;
                case 'I am feeling lucky button':
                    // $('//div[@class="lJ9FBc"]/center/input[2]')
                    console.info("write code here to validate i am feeling lucky button")
                    break;  
                default:
                    console.error("Not a valid option") 
                    break; 

            }
        
        })

        
})


