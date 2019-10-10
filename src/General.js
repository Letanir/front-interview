import React from 'react';

export default class General extends React.Component {

    render() {
        return (
            <div>
                {/*this.getLengthArray()*/}
                {/*this.filterSpam()*/}
            </div>
        )
    }

    getLengthArray() {
        let arr = ["Есть", "жизнь", "на", "Марсе"];
        //Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
        let arrLength = [];
        for (let i = 0; i < arr.length; i++) {
            arrLength[i] = arr[i].length;
        }

        alert( arrLength ); // 4,5,2,5
    }

    filterSpam(){
        alert(this.checkSpam('buy ViAgRA now'));
        alert(this.checkSpam('free xxxxx'));
        alert(this.checkSpam("innocent rabbit"));
    }

    checkSpam(str) {
        /*Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
            Функция должна быть нечувствительна к регистру:*/
        return "not implemented!";
    }
}