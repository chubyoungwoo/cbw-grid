<template>
  <div style="margin: 20px">
    <h3>보드</h3>
    <BeeGridTable border :columns="columns" :data="data" @on-row-click="onRowClick"></BeeGridTable>

    <div>
      <pre><code class="lang-html">  {{code}}</code></pre>
    </div>
    <div>
      <pre><code class="lang-javascript">  {{codeJs}}</code></pre>
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
                    title: 'Salary',
                    key: 'salary'
                }
            ],
            data: [],
            code: `
    <BeeGridTable
        border
        :columns="columns"
        :data="data"
        ></BeeGridTable>
      `,
            codeJs: `
    columns: [
      {
        title: "Name",
        key: "name",
      },
      {
        title: "Age",
        key: "age",
      },
      {
        title: "Street",
        key: "street",
      },
      {
        title: "Salary",
        key: "salary",
      },
    ],
      `
        };
    },
    methods: {
        onRowClick(row, index) {}
    },
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    name: 'Bob' + i,
                    age: i,
                    street: 'Walf Street',
                    building: 'D' + ((i % 10) + 1),
                    door: i % 21,
                    caddress: 'Lake Street 41',
                    cname: 'SoftLake Co',
                    salary: '￥' + i
                });
            }
            this.data = tempData;
        }, 1000);
    }
};
</script>
