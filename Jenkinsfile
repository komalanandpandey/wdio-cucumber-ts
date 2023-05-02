pipeline {
    agent { dockerfile true }
    // Install NodeJS plugin then configure nodejs in Manage Jenkins => Global Tool configuration 
    // tools {nodejs "nodejs"}  
    // environment {
    //     CI = 'true' 
    // }
    stages {
        stage('Build') {
            steps {
                sh 'docker pull komalanandpandey/wdio-cucumber-ts'
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run tests' 
            }
        }
    }
}
