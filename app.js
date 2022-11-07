const app = Vue.createApp({
    data(){
        return{
            myName:'lasha',
            myAge:28,
            randomNumber:'',
            imageLink:'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960'

        }
    },
    methods:{
        generateRandomNumber(){
            const randomNumb =Math.random();
            return randomNumb;
        }
    }

});
app.mount('#assignment');