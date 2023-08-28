import http from '@/request/index'

export const getFruitCards = () => {
  return http({
    url:'./imgData.json',
    method:'get'
  })
}
