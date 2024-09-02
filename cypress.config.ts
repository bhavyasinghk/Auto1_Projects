import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    'baseUrl': 'https://www.simplilearn.com',
    video : true,
    videoCompression : true,
  },
  
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})