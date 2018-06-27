import Api from '@/services/Api'

export default {
  fetchStats () {
    return Api().get('stats')
  }
}
