export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*'
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL('https://api.ccrosby.ru/api/')
    api.setHeader('xprojectid', '2')
    api.setHeader('xmarketgroup', '4')
  
    // Inject to context as $api
    inject('api', api)
  }