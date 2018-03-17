/**
 * Created by nimengwei on 2018/3/13.
 */

function getComponent() {
    return import(/* webpackChunkName: "lodash" */'lodash').then(_ => {

        var element = document.createElement('div');
        console.log(_.join);
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => console.log(error));
}

getComponent().then(component => {
    document.body.appendChild(component);
})

