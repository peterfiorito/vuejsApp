import Api from '@/services/Api'

export default {
  fetchGoals () {
    return Api().get('goals')
  }
}
