<template>
  <div style="margin: 20px">
    <h3>필터숨기기</h3>
    <BeeGridTable border :showFilter="false" :columns="columns" :data="data"></BeeGridTable>

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
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Street',
                    key: 'street'
                },
                {
                    title: 'Gender',
                    key: 'gender'
                }
            ],
            data: [],
            code: `
    <BeeGridTable
      border
      :showFilter="false"
      :columns="columns"
      :data="data"
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
