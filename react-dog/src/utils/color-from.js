import red from 'material-ui/colors/red';
import pink from 'material-ui/colors/pink';
import purple from 'material-ui/colors/purple';
import deepPurple from 'material-ui/colors/deepPurple';
import blue from 'material-ui/colors/blue';
import indigo from 'material-ui/colors/indigo';
import lightBlue from 'material-ui/colors/lightBlue';
import cyan from 'material-ui/colors/cyan';
import teal from 'material-ui/colors/teal';
import green from 'material-ui/colors/green';
import lightGreen from 'material-ui/colors/lightGreen';
import lime from 'material-ui/colors/lime';
import yellow from 'material-ui/colors/yellow';
import amber from 'material-ui/colors/amber';
import orange from 'material-ui/colors/orange';
import deepOrange from 'material-ui/colors/deepOrange';

const colors = [
    red, pink, purple, deepPurple, blue, indigo, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange
];

export default function colorFrom(string) {
    try {
        const index = string
            .toString()
            .split('')
            .map(char => char.charCodeAt())
            .reduce ((sum, num) => sum + num, 0);

        const colorIndex = index % colors.length;
        return colors[colorIndex][600];
    } catch (e){
        console.error(e);
        return red[900];
    }
   
}
