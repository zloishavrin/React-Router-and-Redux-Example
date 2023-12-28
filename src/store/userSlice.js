import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        login: "Vite User",
        "Паспорт": {
            "ФИО": "Иванов Иван Иванович",
            "Серия паспорта": "1111",
            "Номер паспорта": "111 000",
            "Код паспорта": "111-000"
        },
        "Адрес": {
            "Город": "Москва",
            "Улица": "Неаполитанская",
            "Дом": "17"
        },
        "Био": {
            "Пол": "Мужской",
            "Рост": 180,
            "Вес": 80
        }
    },
    reducers: {
        clearAdress: (state) => {
            for(let key in state['Адрес']) {
                state['Адрес'][key] = 'Неизвестно';
            }
        },
        addWeight: (state) => {
            state['Био']['Вес'] += 1;
        },
        minusWeight: (state) => {
            state['Био']['Вес'] -= 1;
        }
    }
})

export const { clearAdress, addWeight, minusWeight } = userSlice.actions;
export default userSlice.reducer;