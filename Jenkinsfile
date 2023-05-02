pipeline {
    agent {
        docker{
            image 'node:16.14.2-alpine'
        }
    }
    stages {
         stage('Build project'){
            steps {
                 echo 'Installing docker'
                 sh ''' 
                 apt-get install docker.io
                 docker --version
                 '''
            }
        }
        stage('Test project'){
            steps {
                echo 'Pulling project docker image'
                sh '''
                docker pull komalanandpandey/wdio-docker-test
                '''
            }
        }
    }
}
