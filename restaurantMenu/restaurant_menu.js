const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastItems = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastItems;

let maincourseItems = '';
mainCourseMenu.forEach((item, index) => { maincourseItems += `<p>Item ${index + 1}: ${item}</p>`; });
document.getElementById('maincourseMenuItems').innerHTML = maincourseItems;

let dessertItems = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;