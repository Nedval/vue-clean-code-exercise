import Header from '@/components/Header'
import {shallowMount} from '@vue/test-utils'

describe('show cake', () => {
    let wrapper
    let name
    let birthday
    let today

    it('default value', () => {
        SetName('Jackson')
        SetBirthday(10, 18)
        SetTodayDate(10, 16)
        BuildWrapper()
        expect(wrapper.vm.profileCaption).toEqual('Jackson')
    })

    it('is birthday', () => {
        SetName('Jackson')
        SetBirthday(10, 18)
        SetTodayDate(10, 18)
        BuildWrapper()
        expect(wrapper.vm.profileCaption).toEqual(`Jackson🎂`)
    })

    function SetName(profile_name) {
        name = profile_name
    }

    function SetBirthday(month, day) {
        birthday = {
            month: month,
            day: day
        }
    }

    function SetTodayDate(month, day) {
        today = new Date(2018, month - 1, day)
    }
    function BuildWrapper() {
        wrapper = shallowMount(Header,
            {
                data() {
                    return {
                        profile: {
                            name: name,
                            birthday : birthday
                        }
                    }
                },
                methods: {
                    _getTodayDate: () => {
                        return today
                    }
                }
            })
    }
})