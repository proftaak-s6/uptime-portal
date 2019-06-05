pipeline {
  environment {
    registry = "yoksar/uptime-portal"
    registryACC = "yoksar/uptime-portal-acc"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
    stages {
        stage('Master') {
            when {
                branch 'master'
            }
            stages{
                stage('Cloning Git') {
                    steps {
                        git([url: 'https://github.com/proftaak-s6/uptime-portal.git', branch: 'master', credentialsId: 'Github'])
                    }
                }
                stage('Building image') {
                    steps{
                        script {
                        dockerImage = docker.build registry
                        }
                    }
                }
                stage('Deploy Image') {
                    steps{
                            script {
                                docker.withRegistry( '', registryCredential ) {
                                dockerImage.push()
                            }
                        }
                    }
                }
                stage('Remove Unused docker image') {
                    steps{
                        sh "docker rmi $registry"
                    }
                }


                stage("ACC") {
                    steps{
                        node("docker-prod"){
                            git([url: 'https://github.com/proftaak-s6/uptime-portal.git', branch: 'master', credentialsId: 'Github'])
                            sh "docker service rm uptime-portal_overheidsportaal"
                            sh "docker stack deploy --with-registry-auth -c docker-compose.yml uptime-portal"
                        }
                    }
                }
            }
        }

        stage('Acceptance') {
            when {
                branch 'acceptance'
            }
            stages{
                stage('Cloning Git') {
                    steps {
                        git([url: 'https://github.com/proftaak-s6/uptime-portal.git', branch: 'acceptance', credentialsId: 'Github'])
                    }
                }
                stage('Building image') {
                    steps{
                        script {
                        dockerImage = docker.build registryACC
                        }
                    }
                }
                stage('Deploy Image') {
                    steps{
                            script {
                                docker.withRegistry( '', registryCredential ) {
                                dockerImage.push()
                            }
                        }
                    }
                }
                stage('Remove Unused docker image') {
                    steps{
                        sh "docker rmi $registryACC"
                    }
                }


                stage("Production") {
                    steps{
                        node("docker-prod"){
                            git([url: 'https://github.com/proftaak-s6/uptime-portal.git', branch: 'acceptance', credentialsId: 'Github'])
                            script{
                                try{
                                    sh "docker service rm uptime-portal-ACC_overheidsportaal"
                                }
                            }
                            sh "docker stack deploy --with-registry-auth -c docker-compose.yml uptime-portal-ACC"
                        }
                    }
                }
            }
        }
    }
}