<template>
  <div style="margin: 20px">
    <h3>사용자정의초기필터값 적용</h3>

    <BeeGridTable border height="560" :showSummary="false" :columns="columns" :data="data">
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px">새로고침</Button>
        <Button type="warning" size="small" @click="addPatient(column)">추가</Button>
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px">수정</Button>
        <Button type="error" size="small" @click="handleDelete(row, index)">삭제</Button>
      </template>
      <template slot-scope="{ row }" slot="sex">
        <i style="font-size: x-large" class="bee-sys-icon md-man" v-if="row.sex === 0"></i>
        <i style="font-size: x-large; color: red" class="bee-sys-icon md-woman" v-else></i>
      </template>
      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option v-for="item in stateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option v-for="item in groupList" :value="item.code" :key="item.name">{{ item.name }}</Option>
        </Select>
      </template>
    </BeeGridTable>

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
import Select from '../components/select/select.vue';
import Option from '../components/select/option.vue';
import Button from '../components/button/button.vue';
//import Input from '../components/input/input.vue';

export default {
    components: { BeeGridTable, Select, Option, Button },
    data() {
        return {
            columns: [
                {
                    title: '코드',
                    key: 'code',
                    width: 150
                },
                {
                    title: '성명',
                    key: 'name',
                    width: 150
                },
                {
                    title: '성별',
                    slot: 'sex',
                    key: 'sex',
                    width: 150,
                    filterValue: '여성',

                    filterMethod(column, field, value, row) {
                        if (value === '남성' || value === '여성') {
                            return (
                                (value === '남성' && row.sex === 0) ||
                                (value === '여성' && row.sex === 1)
                            );
                        } else {
                            return true;
                        }
                    }
                },
                { title: '나이', key: 'age', width: 150, resizable: true },
                {
                    title: '그룹',
                    slot: 'group',
                    key: 'groupName'
                },
                {
                    title: '상태',
                    slot: 'state',
                    key: 'state',
                    width: 200
                },
                {
                    title: '관리',
                    slot: 'op',
                    key: 'op',
                    width: 150
                }
            ],
            data: [],
            groupList: [
                {
                    code: 1,
                    name: '그룹1'
                },
                {
                    code: 2,
                    name: '그룹2'
                },
                {
                    code: 3,
                    name: '그룹3'
                },
                {
                    code: 4,
                    name: '그룹4'
                }
            ],
            stateList: [
                {
                    value: 0,
                    label: '진행중'
                },
                {
                    value: 1,
                    label: '대기'
                },
                {
                    value: 2,
                    label: '접수'
                },
                {
                    value: 3,
                    label: '완료'
                }
            ],
            code: `
    <BeeGridTable
      border
      height="560"
      :showSummary="false"
      :columns="columns"
      :data="data"
    >
    ...
      <template slot-scope="{ row }" slot="sex">
        <i
          style="font-size: x-large"
          class="bee-sys-icon md-man"
          v-if="row.sex === 0"
        ></i>
        <i
          style="font-size: x-large; color: red"
          class="bee-sys-icon md-woman"
          v-else
        ></i>
      </template>
      ...
    </BeeGridTable>

      `,
            codeJs: `
    {
        title: "성별",
        slot: "sex",
        key: "sex",
        width: 150,
        filterValue: "여성",
        
        filterMethod(column, field, value, row) {
        if (value === "남성" || value === "여성") {
            return (
            (value === "남성" && row.sex === 0) ||
            (value === "여성" && row.sex === 1)
            );
        } else {
            return true;
        }
        },
    },
      `
        };
    },
    methods: {
        handleInput(event, fcolumn) {
            console.log('handleInput', event);
            console.log('fcolumn', fcolumn);
        }
    },
    mounted() {
        setTimeout(() => {
            let tempData = [];
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    code: `abc` + i,
                    name: 'John' + i,
                    birthDay: '',
                    age: (i % 65) + 5,
                    groupCode: (i % 3) + 1,
                    groupName: '그룹' + ((i % 3) + 1),
                    state: i % 4,
                    sex: i % 2
                });
            }
            this.data = tempData;
        }, 1000);
    }
};
</script>
