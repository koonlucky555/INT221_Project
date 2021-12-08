pipeline {
    agent any

    stages {

        stage('stop and remove container, image') {
            steps {
                sh 'docker stop frontend'
                sh 'docker rm frontend'
                sh 'docker image rm frontend'
                sh 'docker-compose --version'
                sh 'docker-compose --version'
            }
        }

        stage('remove whole data') {
            steps {
                sh 'rm -rf *'
            }
        }

        stage('git clone') {
            steps {
                git branch: 'master',
                    credentialsId: 'INT222jenkins',
                    url: 'https://github.com/integratedproject-int221/front-end.git'
            }
        }

        stage('(deploy) start contianer') {
            steps {
                sh 'docker-compose up -d'
            }
        }

    }
}
