
Vue.component("my-list",{
    props: ['todo'],
    template:`
         <tr>
                    <td>{{todo.id}}</td>
                    <td>{{todo.name}}</td>
                    <td>{{todo.price}}$</td>
                    <td>{{todo.country}}</td>
                    <td> <button class="btn btn-danger"@click="$emit('remove')">Remove</button> </td>
         </tr>
    `
})

new Vue({
    el:".container",
    data: {
        newId:4,
        newName:"",
        newPrice:"",
        newCountry:"",
        products: [
            {
                id: 1,
                name: "samsung",
                price: 200,
                country: "USA"
            },
            {
                id: 2,
                name: "redmi",
                price: 200,
                country: "CHina"
            },
            {
                id: 3,
                name: "iphone",
                price: 200,
                country: "USA"
            },
        ]
    },
    methods:{
        add:function (){
            this.products.push({
                id:this.newId++,
                name:this.newName,
                price: this.newPrice,
                country: this.newCountry
            }),
                this.newName='',
                this.newPrice='',
                this.newCountry=''
        }
    }
})