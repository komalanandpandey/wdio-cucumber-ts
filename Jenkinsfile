pipeline {
    agent any
    stages {
        stage('Verify tools'){
            steps {
                sh '''
                docker version
                docker info
                docker compose version
                '''
            }
        }
    }
}
