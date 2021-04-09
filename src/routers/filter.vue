<template>
  <div style="margin: 20px">
    <h3>기본필터</h3>

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
import pinyin from 'pinyin-match';
import BeeGridTable from '../components/table/table.vue';
import Button from '../components/button/button.vue';

export default {
    components: { BeeGridTable, Button },
    data() {
        return {
            columns: [
                {
                    title: '순번',
                    key: 'code',
                    minWidth: 150,
                    resizable: true
                },
                {
                    title: '성명',
                    key: 'name',
                    minWidth: 150,
                    phoneticMatch: (column, field, filterValue, row) => {
                        var m = pinyin.match(
                            row[field].toString(),
                            filterValue.trim()
                        );

                        if (m === false) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    title: '날짜',
                    key: 'time',
                    type: 'date',
                    dateType: 'datetime',
                    format: 'yyyy-MM-dd HH:mm:ss'
                },
                {
                    title: '성별',
                    slot: 'sex',
                    key: 'sex',
                    minWidth: 150,
                    resizable: true
                },
                { title: '나이', key: 'age', minWidth: 150, resizable: true },
                {
                    title: '그룹',
                    slot: 'group',
                    key: 'groupName',
                    resizable: true
                },
                {
                    title: '상태',
                    slot: 'state',
                    key: 'state',
                    minWidth: 200
                },
                {
                    title: '관리',
                    slot: 'op',
                    key: 'op',
                    minWidth: 150
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
                    label: '작업중'
                },
                {
                    value: 1,
                    label: '대기'
                },
                {
                    value: 2,
                    label: '취소'
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
      <template slot-scope="{ column }" slot="hop">
        <Button type="primary" size="small" style="margin-right: 5px"
          >새로고침</Button
        >
        <Button type="warning" size="small" @click="addPatient(column)"
          >추가</Button
        >
      </template>
      <template slot-scope="{ row, index }" slot="op">
        <Button type="warning" size="small" style="margin-right: 5px"
          >수정</Button
        >
        <Button type="error" size="small" @click="handleDelete(row, index)"
          >삭제</Button
        >
      </template>
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
      <template slot-scope="{ row }" slot="state">
        <Select v-model="row.state" style="width: 100px">
          <Option
            v-for="item in stateList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </template>
      <template slot-scope="{ row }" slot="group">
        <Select v-model="row.groupCode" style="width: 100px">
          <Option
            v-for="item in groupList"
            :value="item.code"
            :key="item.name"
            >{{ item.name }}</Option
          >
        </Select>
      </template>
    </BeeGridTable>
      `,
            codeJs: `
    data() {
    return {
      columns: [
                {
                    title: '순번',
                    key: 'code',
                    minWidth: 150,
                    resizable: true
                },
                {
                    title: '성명',
                    key: 'name',
                    minWidth: 150,
                    phoneticMatch: (column, field, filterValue, row) => {
                        var m = pinyin.match(
                            row[field].toString(),
                            filterValue.trim()
                        );

                        if (m === false) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                {
                    title: '날짜',
                    key: 'time',
                    type: 'date',
                    dateType: 'datetime',
                    format: 'yyyy-MM-dd HH:mm:ss'
                },
                {
                    title: '성별',
                    slot: 'sex',
                    key: 'sex',
                    minWidth: 150,
                    resizable: true
                },
                { title: '나이', key: 'age', minWidth: 150, resizable: true },
                {
                    title: '그룹',
                    slot: 'group',
                    key: 'groupName',
                    resizable: true
                },
                {
                    title: '상태',
                    slot: 'state',
                    key: 'state',
                    minWidth: 200
                },
                {
                    title: '관리',
                    slot: 'op',
                    key: 'op',
                    minWidth: 150
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
                    label: '작업중'
                },
                {
                    value: 1,
                    label: '대기'
                },
                {
                    value: 2,
                    label: '취소'
                },
                {
                    value: 3,
                    label: '완료'
                }
            ],
    };
  },
      `
        };
    },
    methods: {},
    mounted() {
        setTimeout(() => {
            let tempData = [];

            tempData.push({
                key: 'ad0',
                code: `abc220`,
                name: '홍길동',
                time: 1610629800466 + i * 100,
                birthDay: '',
                age: (i % 65) + 5,
                groupCode: (i % 3) + 1,
                groupName: '그룹2',
                state: 2,
                sex: 1
            });

            tempData.push({
                key: 'ad65',
                code: `abc1sd`,
                name: '이순신',
                time: 1610629800466 + i * 100,
                birthDay: '',
                age: (i % 65) + 5,
                groupCode: (i % 3) + 1,
                groupName: '그룹1',
                state: 2,
                sex: 1
            });
            for (var i = 1; i < 1001; i++) {
                tempData.push({
                    key: i,
                    code: `abc` + i,
                    name: 'John' + i,
                    time: 1610629800466 + i * 100,
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
