var idVar;

const Id = Vue.component('participants', {
    template: `
<div>
   <label class="coloredText"><h2>Enter ID in the url and it </br>
   will be visible here: ID {{ idVar }}</h2></label>
</div>
`,
    created() {
        this.fetchData()
    },
        data() {
            return {
                idVar: (this.$route.params.id)
                  }
    },
    methods: {
        fetchData() {
            console.log(this.$route.params.id);
        }
    }
});
export default Id

