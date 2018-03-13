/**
 * Created by nimengwei on 2018/3/13.
 */
import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());