import Id from '../components/id.js'
import Page from '../components/page.js'

const ColorPage = {
    props: ['bga', 'bgb'],
    template: `
<div id="middle">
    <label class="coloredText"><h2>Change Colors By Typing Their Names:</h2></label>
    </br>
    <input type="text" class="colorInput" v-model="$parent.bgb" placeholder="here...">
    </br>
    <input type="text" class="colorInput" v-model="$parent.bga" placeholder="... and here!">
</div>
`
};

const routes = [
    {path: '/', component: ColorPage},
    {path: '/page', component: Page},
    {path: '/:id', component: Id},
];
const router = new VueRouter({
    routes // short for `routes: routes`
});


var vm = new Vue({
    el: '.container',
    router,
    data: {
        bga: '',
        bgb: '',
        image: "./assets/boats.jpg"
    }
});