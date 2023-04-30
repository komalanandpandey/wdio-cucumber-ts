pipeline {
    agent any
    stages {
         stage('Build project'){
            steps {
                sh '''
                npm install
                '''
            }
        }
        stage('Test project'){
            steps {
                sh '''
                npm run tests
                '''
            }
        }
    }
}
