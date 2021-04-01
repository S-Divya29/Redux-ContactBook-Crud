import {addContact,getContact} from './contactAction'

describe('addContact',()=>{
    it('has the correct type',()=>{
        const action = addContact()
        expect(action.type).toEqual('CREATE_CONTACT')
    })

    it('has the correct paylod',()=>{
        const action = addContact('contact')
        expect(action.payload).toEqual('contact')
    })
})

describe('getContact',()=>{
    test('has the correct type',()=>{
        const action = getContact()
        expect(action.type).toEqual('GET_CONTACT')
    })

    test('has the correct paylod',()=>{
        const action = getContact('id')
        expect(action.payload).toEqual('id')
    })
})