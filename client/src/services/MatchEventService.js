import Api from '@/services/Api'

export default {
  fetchEvents () {
    return Api().get('events')
  }
}
