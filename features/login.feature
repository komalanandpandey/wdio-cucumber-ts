Feature: The Internet Guinea Pig Website

  Scenario: Check datatable using rowsHash function
    
    Given I check rowHash method
        | key     | value   |
        |username | komalpld|
        |password | RED345  |

  Scenario: Check datatable using hashes function
    
    Given I check Hashes method
        | username     | password   |
        |username1     | pass1      |
        |username2     | pass2      |
        |username3     | pass3      |
        |username4     | pass4      |       
        
  Scenario: Check datatable using rows function
    
    Given I check rows method
        | name     | mobile   |
        |komal     | 98987888      |
        |rajesh     | 7878888      |
        |vyom     | 9887678      |
        |seema     | 5678998      |  

  Scenario: Check selectors in WDIO
    
    Given I navigate to test web url
        | url |   https://qavbox.github.io/demo/    |
    Then I click on signup page
