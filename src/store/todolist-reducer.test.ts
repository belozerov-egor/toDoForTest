import {addTask, checkTask, filteredTasks, InitialStateType, removeTask, todolistReducer} from "./todolist-reducer";
import {v1} from "uuid";


let startState: InitialStateType

beforeEach(()=> {
    startState = {
        title: "todos",
        tasks: [
            {id: "1", title: "Тестовое задание", isDone: false},
            {id: v1(), title: "Прекрасный код", isDone: true},
            {id: v1(), title: "Покрытие тестами", isDone: false}],
        filter: "all"
    }
})

test('add new task', ()=> {
    const endState = todolistReducer(startState, addTask('newTask'))

    expect(endState.tasks.length).toBe(4)
    expect(endState.tasks[0].title).toBe('newTask')
    expect(endState.tasks[1].title).toBe(startState.tasks[0].title)
})

test('remove task', ()=> {
    const endState = todolistReducer(startState, removeTask())

    expect(endState.tasks.length).toBe(2)
    expect(endState.tasks[1].title).toBe('Покрытие тестами')
    expect(endState.tasks[1].title).toBe(startState.tasks[2].title)
})

test('check task', ()=> {
    const endState = todolistReducer(startState, checkTask("1", true))

    expect(endState.tasks.length).toBe(startState.tasks.length)
    expect(endState.tasks[0].isDone).toBe(true)
})
test('filter task', ()=> {
    const endState = todolistReducer(startState, filteredTasks("active"))

    expect(endState.filter).toBe('active')
})




