<template>
  <div style="margin: 20px">
    <h3>선택</h3>
    <BeeGridTable border ref="selection" :columns="columns" :data="data"></BeeGridTable>
    <Button type="primary" size="large" @click="handleSelectAll(true)">전체선택</Button>
    <Button type="primary" size="large" @click="handleSelectAll(false)">전체취소</Button>
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
import Button from '../components/button/button.vue';
export default {
    components: { BeeGridTable, Button },
    data() {
        return {
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name',
                    align: 'center'
                },
                {
                    title: 'Age',
                    key: 'age',
                    align: 'center'
                },
                {
                    title: 'Street',
                    key: 'street',
                    align: 'center'
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
      border
      ref="selection"
      :columns="columns"
      :data="data"
    ></BeeGridTable>
    <Button type="primary" size="large" @click="handleSelectAll(true)">
      전체선택
    </Button>
    <Button type="primary" size="large" @click="handleSelectAll(false)">
      전체취소
    </Button>
      `,
            codeJs: `
    columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "Name",
          key: "name",
          align: "center",
        },
        {
          title: "Age",
          key: "age",
          align: "center",
        },
        {
          title: "Street",
          key: "street",
          align: "center",
        },
        {
          title: "Gender",
          key: "gender",
          align: "center",
        },
      ],

      ...

    methods: {
        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        },
    },
      `
        };
    },
    methods: {
        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        }
    },
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
