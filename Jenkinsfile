pipeline {
  agent {
    docker {
      image 'boisvert/ruby-build'
      args '-v /var/run/docker.sock:/var/run/docker.sock -u root'
    }
  }

  environment {
    DEPLOY_USER = 'jenkins'
    DEPLOY_HOST = '10.0.0.13'
    DEPLOY_PATH = '/var/www/html'
    BUILD_DIR   = '_site/' // change to 'public' or 'dist' if not Jekyll
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'gem install bundler && bundle install' // for Jekyll
        // sh 'npm ci' if using JS stack
      }
    }

    stage('Build Site') {
      steps {
        sh 'JEKYLL_ENV=production bundle exec jekyll build --verbose'
      }
    }

    stage('Deploy with rsync') {
      steps {
        sshagent(['alphagame-dev-jenkins']) {
          sh """
            rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" _site/ jenkins@10.0.0.13:/var/www/html
          """
        }
      }
    }
  }

  post {
    success {
      echo '✅ Deployed successfully!'
    }
    failure {
      echo '❌ Something broke. Check the logs.'
    }
  }
}
