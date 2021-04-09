<template>
  <div style="margin: 20px">
    <h3>합계</h3>
    <h4>지정한열에 합계 적용</h4>
    <BeeGridTable border :columns="columns" :data="data" :showSummary="true"></BeeGridTable>

    <div>
      <pre><code class="lang-html">  {{code}}</code></pre>
    </div>
    <div>
      <pre><code class="lang-javascript">  {{codeJs}}</code></pre>
    </div>

    <h4>지정한열에 사용자 정의 합계 적용</h4>
    <BeeGridTable
      border
      :columns="columns"
      :data="data"
      :showSummary="true"
      :summary-method="customSummary"
    ></BeeGridTable>

    <div v-highlight>
      <pre><code class="lang-html">  {{code1}}</code></pre>
    </div>
    <div v-highlight>
      <pre><code class="lang-javascript">  {{codeJs1}}</code></pre>
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
                    title: '工时',
                    key: 'money',
                    showSummary: true
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
      :columns="columns"
      :data="data"
      :showSummary="true"
    ></BeeGridTable>
      `,
            codeJs: `
    columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "합계",
          key: "money",
          showSummary: true,
        },
        {
          title: "Street",
          key: "street",
        },
        {
          title: "Gender",
          key: "gender",
        },
      ],
      `,
            code1: `
    <BeeGridTable
      border
      :columns="columns"
      :data="data"
      :showSummary="true"
      :summary-method="customSummary"
    ></BeeGridTable>
      `,
            codeJs1: `
    methods: {
    //사용자정의
    customSummary({ columns, data }) {
      const sums = {};
      columns.forEach((column, index) => {
        console.log(column);
        const key = column.key;
        if (column.key === "name") {
          sums[column.key] = {
            key: column.key,
            value: "합계",
          };
          return;
        }
        // 화폐money
        if (column.key === "money") {
          const values = data.map((item) => Number(item[key]));
          if (!values.every((value) => isNaN(value))) {
            const v = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[key] = {
              key,
              value: v + " 원",
            };
          } else {
            sums[key] = {
              key,
              value: "N/A",
            };
          }
        }
      });

      return sums;
    },
  },
      `
        };
    },
    methods: {
        //사용자정의
        customSummary({ columns, data }) {
            const sums = {};
            columns.forEach((column, index) => {
                console.log(column);
                const key = column.key;
                if (column.key === 'name') {
                    sums[column.key] = {
                        key: column.key,
                        value: '합계'
                    };
                    return;
                }
                // 원money
                if (column.key === 'money') {
                    const values = data.map(item => Number(item[key]));
                    if (!values.every(value => isNaN(value))) {
                        const v = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[key] = {
                            key,
                            value: v + ' 원'
                        };
                    } else {
                        sums[key] = {
                            key,
                            value: 'N/A'
                        };
                    }
                }
            });

            return sums;
        }
    },
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    name: 'John' + i,
                    money: i,
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
