pipeline {
    agent any

    stages {
        stage('staging') {
            steps {
                sh '''
                  echo "Hello World"
                  touch hello.txt
                '''
            }
        }

        stage('build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                  echo "Hello docker"
                  touch hellodocker.txt
                  ls -la
                  npm --version
                  node --version
                  ls -la
                '''
            }
        }

        stage('test') {
            steps {
               sh 'test -f index.html'
            }
        }
    }
}
