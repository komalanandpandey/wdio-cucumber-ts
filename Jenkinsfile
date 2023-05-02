pipeline {
    agent any
    tools {nodejs "nodejs"}  // Go to Manage Jenkins -> Global Tool config then configure nodejs -> 
    environment {
        CI = 'true' 
    }
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
