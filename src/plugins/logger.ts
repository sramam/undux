import { Plugin } from '../'

export let withLogger: Plugin = store => {

  store.beforeAll().subscribe(
    ({ key, previousValue, value }
      : { key: string, previousValue: any, value: any }) => {
      console.info(`%c ⥁ ${key}`, 'background-color: rgb(96, 125, 139); color: #fff; padding: 2px 8px 2px 0;', previousValue, '→', value)
    })

  return store
}
