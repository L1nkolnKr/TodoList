import {userReducer} from "./user-reducer";


test('user reducer should increment only age ', () => {
    //Тест состоит из стартовых данных
    const startState = { age: 26, childrenCount: 2, name: 'Sasha'}
    //Закидываем в редюсер, и ожидаем что редюсер вернет обработтаный стэйт
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})
    //Далее expect проверки
    expect(endState.age).toBe(27);
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should increment only childrenCount', () =>{
    const startState = {age : 26, childrenCount: 2, name: 'Sasha'}

    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.childrenCount).toBe(3)
})

test('user reducer should change name of user', () =>{
    const startState = {age : 26, childrenCount: 2, name: 'Sasha'}
    const newName = 'Viktor'

    const endState = userReducer(startState, {type: 'CHANGE-NAME', newName: newName})

    expect(endState.name).toBe(newName)
})
