import Api from '@/services/Api'

export default {
  fetchSummary () {
    return Api().get('summary')
  }
}
