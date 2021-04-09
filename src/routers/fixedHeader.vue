<template>
  <div style="margin: 20px">
    <h3>헤더고정</h3>
    <BeeGridTable height="560" :columns="columns" :data="data"></BeeGridTable>

    <div>
      <pre><code class="lang-html">  {{code}}</code></pre>
    </div>
  </div>
</template>
<script>
import BeeGridTable from '../components/table/table.vue';
export default {
    components: { BeeGridTable },
    data() {
        return {
            columns: [
                {
                    title: 'Name',
                    key: 'name',
                    align: 'center',
                    resizable: true
                },
                {
                    title: 'Age',
                    key: 'age',
                    align: 'center',
                    sortable: true
                },
                {
                    title: 'Street',
                    key: 'street',
                    align: 'center',
                    resizable: true
                },
                {
                    title: 'Gender',
                    key: 'gender',
                    align: 'center'
                }
            ],
            data: [],
            code: `
    <BeeGridTable        
        :columns="columns"
        :data="data"
        height="560"
        ></BeeGridTable>
      `
        };
    },
    methods: {},
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    name: 'John' + i,
                    age: i,
                    street: 'Lake Park',
                    building: 'dddf',
                    door: i % 21,
                    caddress: 'Lake Street 41',
                    cname: 'SoftLake Co',
                    gender: 'M'
                });
            }
            this.data = tempData;
        }, 1000);
    }
};
</script>
